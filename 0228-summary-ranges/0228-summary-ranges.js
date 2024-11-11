/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ans = [];
    for(let i = 0; i < nums.length; i++) {
        const start = nums[i];
        while(i < nums.length && (nums[i] + 1 === nums[i + 1])) i += 1;
        const end = nums[i];
        if(start === end) ans.push(String(start));
        else ans.push(`${start}->${end}`);
    }

    return ans;
};