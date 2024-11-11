/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return [];
    if(intervals.length === 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const ans = [];
    let maxEnd = intervals[0][1];
    let minStart = intervals[0][0];

    for(let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if(maxEnd < start) {
            ans.push([minStart, maxEnd]);
            minStart = start;
        }

        maxEnd = Math.max(maxEnd, end);
        if(i === intervals.length - 1) ans.push([minStart, maxEnd]);
    }

    return ans;
};