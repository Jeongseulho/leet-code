/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let maxProfit = 0;

    for(const price of prices) {
        maxProfit = Math.max(maxProfit, price - buyPrice);
        if(price < buyPrice) buyPrice = price;
    }

    return maxProfit;
};