/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const output = [];
    let i = 0;
    while(i < nums.length) {
        const s = nums[i];
        while((i < nums.length) && (nums[i] + 1 === nums[i + 1])) {
            i += 1;
        }
        const e = nums[i];
        if(s === e) output.push(String(s));
        else output.push(`${s}->${e}`);
        i++;
    }

    return output;
};