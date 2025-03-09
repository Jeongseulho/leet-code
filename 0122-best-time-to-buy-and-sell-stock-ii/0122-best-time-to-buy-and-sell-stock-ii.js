/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    const stack = [prices[0]];
    for(let i = 1; i < prices.length; i++) {
        const price = prices[i];
        const buyPrice = stack[stack.length - 1];
        if(buyPrice > price) stack.push(price);
        else {
            profit += price - buyPrice;
            stack.push(price);
        }
    }

    return profit;
};