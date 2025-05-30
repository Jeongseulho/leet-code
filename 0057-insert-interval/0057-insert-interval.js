/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const beforeNewInterval = [];
    const n = intervals.length;
    let i = 0;
    while(i < n && intervals[i][1] < newInterval[0]) {
        beforeNewInterval.push(intervals[i]);
        i++;
    }
    while(i < n && newInterval[1] >= intervals[i][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    return [...beforeNewInterval, newInterval, ...intervals.slice(i)];
};