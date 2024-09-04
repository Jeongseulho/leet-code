/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let holdStockMaxProfit = -prices[0] - fee;
    let notHoldStockMaxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        holdStockMaxProfit = Math.max(holdStockMaxProfit, notHoldStockMaxProfit - prices[i] - fee);
        notHoldStockMaxProfit = Math.max(notHoldStockMaxProfit, holdStockMaxProfit + prices[i]);
    }

    return notHoldStockMaxProfit;
};