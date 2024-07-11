/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [s, e] = [0, height.length - 1];
    let maxWater = 0;
    while(e >= s) {
        const y = Math.min(height[s], height[e]);
        const x = e - s;
        maxWater = Math.max(maxWater, y * x);
        if(height[s] > height[e]) e--;
        else s++;
    }

    return maxWater;
};