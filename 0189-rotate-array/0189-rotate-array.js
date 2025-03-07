/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const rotateCnt = k % nums.length;
    const origin = [...nums];
    for(let i = 0; i < nums.length; i++) {
        const changeIdx = i - rotateCnt < 0 ? nums.length - rotateCnt + i : i - rotateCnt;
        nums[i] = origin[changeIdx];
    }
};