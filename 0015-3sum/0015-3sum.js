/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const ans = new Set();

    for(let i = 0; i < nums.length - 2; i++) {
        let s = i + 1;
        let e = nums.length - 1;

        while(s !== e) {
            const sum = nums[i] + nums[s] + nums[e];
            if(sum === 0) {
                ans.add(JSON.stringify([nums[i], nums[s], nums[e]]));
                s++;
            } else if(sum > 0) e--;
            else if(sum < 0) s++;
        }
    }

    return Array.from(ans).map((str) => JSON.parse(str));
};