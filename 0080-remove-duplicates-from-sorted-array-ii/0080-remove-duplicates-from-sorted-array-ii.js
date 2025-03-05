/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1;
    let cnt = 1;
    for(let j = 1; j < nums.length; j++) {
        if(nums[i - 1] === nums[j]) {
            if(cnt === 1) {
                cnt += 1;
                nums[i] = nums[j];
                i += 1;
            }
        } else {
            nums[i] = nums[j];
            cnt = 1;
            i += 1;
        }
    }

    return i;
};