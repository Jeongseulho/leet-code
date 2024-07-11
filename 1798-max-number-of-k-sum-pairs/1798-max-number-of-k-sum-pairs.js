/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let [s, e, cnt] = [0, nums.length - 1, 0];
    while(s < e) {
        if(nums[s] + nums[e] === k) {
            s++;
            e--;
            cnt++;
        } else if(nums[s] + nums[e] > k) e--;
        else s++;
    }

    return cnt;
};