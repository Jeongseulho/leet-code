/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const dp = Array.from({ length : word1.length + 1 }, () => Array(word2.length + 1).fill(0));
    for(let i = 0; i <= word1.length; i++) {
        for(let j = 0; j <= word2.length; j++) {
            if(j === 0) dp[i][j] = i;
            else if(i === 0) dp[i][j] = j;
            else {
                if(word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
                else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }
    return dp[word1.length][word2.length];
};