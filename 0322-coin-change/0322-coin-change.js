/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(const coin of coins) {
        dp[coin] = 1;
    }

    for(let total = 1; total <= amount; total++) {
        for(const coin of coins) {
            const prev = total - coin;
            if(prev >= 0) dp[total] = Math.min(dp[total], dp[prev] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};