/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
        });
    const output = [];
    let prevEnd = intervals[0][1];
    let start = intervals[0][0];

    for(let i = 1; i < intervals.length; i++) {
        const [curStart, curEnd] = intervals[i];
        if(curStart <= prevEnd) prevEnd = Math.max(prevEnd, curEnd);
        else {
            output.push([start, prevEnd]);
            start = curStart;
            prevEnd = curEnd;
        }
    }

    output.push([start, prevEnd]);
    return output;
};