/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const ans = [];
    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        left = i + 1;
        right = nums.length - 1;
        while(left < right) {
            if(nums[i] + nums[left] + nums[right] === 0) {
                ans.push([nums[i], nums[left], nums[right]]);
                left += 1;
                while(left < right && nums[left] === nums[left - 1]) left += 1;
            }
            else if(nums[i] + nums[left] + nums[right] < 0) left += 1;
            else right -= 1;
        }
    }

    return ans;
};