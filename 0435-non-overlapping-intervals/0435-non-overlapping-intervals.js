/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let cnt = 0;
    let prevEnd = intervals[0][1];
    for(const interval of intervals.slice(1)) {
        if(prevEnd <= interval[0]) prevEnd = interval[1];
        else cnt += 1;
    }

    return cnt;
};