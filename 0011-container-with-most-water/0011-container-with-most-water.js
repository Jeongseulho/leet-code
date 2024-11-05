/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while(left < right) {
        const x = right - left;
        const y = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, x * y);
        if(height[left] < height[right]) left += 1;
        else right -= 1;
    }

    return maxWater;
};