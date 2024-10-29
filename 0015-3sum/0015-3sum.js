/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const ans = [];
    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i - 1] === nums[i]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if(sum < 0) left += 1;
            else if(sum > 0) right -= 1;
            else {
                ans.push([nums[i], nums[left], nums[right]]);
                left += 1;
                while(nums[left] === nums[left - 1] && left < right) left += 1;
            }
        }
    }

    return ans;
};