/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    const ans = [];
    const needCharCnt = {};
    
    for (let char of p) {
        if (char in needCharCnt) {
            needCharCnt[char]++;
        } else {
            needCharCnt[char] = 1;
        }
    }
    
    let left = 0;
    let right = 0; 
    let needCharLen = 0;
    
    while (right < s.length) {
        const curChar = s[right];
        if (curChar in needCharCnt) {
            if (needCharCnt[curChar] > 0) needCharLen++;
            needCharCnt[curChar]--;
        }
        right++;
        
        if (needCharLen === p.length) ans.push(left);
        
        if (right - left === p.length) {
            const startChar = s[left];
            if (startChar in needCharCnt) {
                if (needCharCnt[startChar] >= 0) needCharLen--;
                needCharCnt[startChar]++;
            }
            left++;
        }
    }
    return ans;
};
