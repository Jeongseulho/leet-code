/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for(let day = 0; day < prices.length; day++) {
        profit = Math.max(profit, prices[day] - buyPrice);
        if(prices[day] < buyPrice) buyPrice = prices[day];
    }

    return profit;
};