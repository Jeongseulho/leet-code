/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for(let i = 1; i < s.length + 1; i++) {
        for(word of wordDict) {
            const start = i - word.length;
            if(start > -1 && dp[start] && s.substring(start, i) === word) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp.at(-1);
};