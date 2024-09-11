/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const ans = Array(temperatures.length).fill(0);
    const stack = [];
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
            const prevIdx = stack.pop();
            ans[prevIdx] = i - prevIdx;
        }
        stack.push(i);
    }

    return ans;
};