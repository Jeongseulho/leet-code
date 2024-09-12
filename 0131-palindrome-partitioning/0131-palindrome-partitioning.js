/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const ans = [];

    const isPalindrome = (left, right) => {
        while (left < right) {
            if (s[left++] !== s[right--]) return false;
        }
        return true;
    };

    const backTrack = (start, subStrs) => {
        if (start === s.length) return ans.push(subStrs);

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(start, end)) {
                backTrack(end + 1, [...subStrs, s.slice(start, end + 1)]);
            }
        }
    }

    backTrack(0, []);

    return ans;
};