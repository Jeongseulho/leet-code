/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const ans = Array(temperatures.length).fill(0);
    const stack = [];
    for(let day = 0; day < temperatures.length; day++) {
        while(stack.length && temperatures[stack.at(-1)] < temperatures[day]) {
            const prevDay = stack.pop()
            ans[prevDay] = day - prevDay;
        }
        stack.push(day);
    }

    return ans;
};