/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);

    const stack = [points[0]];
    for(let i = 1; i < points.length; i++) {
        const [start, end] = points[i];
        const minEnd = stack.at(-1)[1];
        if(minEnd >= start) {
            stack.pop();
            stack.push([start, Math.min(minEnd, end)])
        } else stack.push([start, end]);
    }

    return stack.length;
};