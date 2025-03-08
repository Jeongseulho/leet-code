/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const stack = [prices[0]];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        const price = prices[i];
        const minPrice = stack[stack.length - 1];
        if(minPrice > price) stack.push(price);
        else maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
};