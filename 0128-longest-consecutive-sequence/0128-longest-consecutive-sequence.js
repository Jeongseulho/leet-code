/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxCnt = 0;
    const numSet = new Set(nums);
    for(const num of nums) {
        if(!numSet.has(num - 1)) {
            let cnt = 0;
            let curNum = num;
            while(numSet.has(curNum)) {
                curNum += 1;
                cnt += 1;
            }
            maxCnt = Math.max(cnt, maxCnt);
        }
    }

    return maxCnt;
};