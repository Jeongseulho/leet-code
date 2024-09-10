/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    let arrowCnt = 1;
    let arrowPos = points[0][1];
    for(const [s, e] of points.slice(1)) {
        if(arrowPos < s  || e < arrowPos) {
            arrowPos = e;
            arrowCnt += 1;
        } 
    }

    return arrowCnt;
};