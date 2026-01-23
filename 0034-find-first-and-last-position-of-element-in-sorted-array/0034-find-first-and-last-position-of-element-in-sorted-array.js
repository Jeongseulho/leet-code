/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    const bs = (findLeft) => {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            if(nums[mid] < target) left = mid + 1;
            if(nums[mid] > target) right = mid - 1;
            if(nums[mid] === target) {
                ans = mid;
                if(findLeft) right = mid - 1;
                else left = mid + 1;
            }
        }

        return ans;
    }

    return [bs(true), bs(false)];
};