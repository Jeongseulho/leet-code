/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxWater = 0;

    while(start < end) {
        const x = end - start;
        const y = Math.min(height[end], height[start]);
        maxWater = Math.max(maxWater, x * y);
        if(height[end] < height[start]) end -= 1;
        else start += 1;
    }

    return maxWater;
};