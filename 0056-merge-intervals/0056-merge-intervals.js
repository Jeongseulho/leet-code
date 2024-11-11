/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    const stack = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        const [prevStart, prevEnd] = stack.at(-1);
        const [start, end] = intervals[i];
        if(prevEnd >= start) {
            stack.pop();
            stack.push([prevStart, Math.max(end, prevEnd)]);
        }
        else stack.push([start, end]);
    }

    return stack;
};