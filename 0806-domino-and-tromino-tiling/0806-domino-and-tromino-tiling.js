/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1e9 + 7;
    const dp = Array.from({ length : 1001 }, () => Array(2).fill(0));
    dp[1][0] = 1;
    dp[2][0] = 2;
    dp[2][1] = 2;
    dp[3][0] = 5;
    dp[3][1] = 4;

    for(let i = 4; i < dp.length; i++) {
        dp[i][0] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 1][1]) % MOD;
        dp[i][1] = (dp[i - 2][0] * 2 + dp[i - 1][1]) % MOD;
    }

    return dp[n][0];
};