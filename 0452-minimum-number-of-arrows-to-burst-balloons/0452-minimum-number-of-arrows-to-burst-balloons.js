/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    const stack = [points[0]];
    for(let i = 1; i < points.length; i++) {
        const [overLapS, overLapE] = stack.at(-1);
        const [curS, curE] = points[i];
        if(curS <= overLapE) {
            const newOverLapS = Math.max(overLapS, curS,);
            const newOverLapE = overLapE;
            stack.pop();
            stack.push([newOverLapS, newOverLapE]);
        } else stack.push([curS, curE]);
    }

    return stack.length;
};