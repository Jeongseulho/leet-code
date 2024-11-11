/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    const res = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [prevStart, prevEnd] = res.at(-1);
        const [start, end] = intervals[i];
        if (prevEnd >= start) {
            res.pop();
            res.push([prevStart, Math.max(prevEnd,end)]);
        } else res.push(intervals[i]);
    }

    return res;    
};