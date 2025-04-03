/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let s = 0;
    let e = height.length - 1;
    let max = 0;
    while(s !== e) {
        const y = Math.min(height[s], height[e]);
        const x = e - s;
        max = Math.max(max, y * x);
        if(height[s] > height[e]) e--;
        else s++;
    }

    return max;
};