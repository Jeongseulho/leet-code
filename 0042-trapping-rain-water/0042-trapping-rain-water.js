/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0;
    let l = 0;
    let r = height.length - 1;
    let maxL = 0;
    let maxR = 0;

    while(l !== r) {
        let leftH = height[l];
        let rightH = height[r];
        maxL = Math.max(maxL, leftH);
        maxR = Math.max(maxR, rightH);

        if(leftH < maxL) {
            water += maxL - leftH;
        }
        if(rightH < maxR) {
            water += maxR - rightH;
        }

        height[l] < height[r] ? l++ : r--;
    }

    return water;
};