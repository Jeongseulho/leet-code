/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    if (nums.length === 0) return 0;

    let totalSum = nums[0];
    
    let currentMax = nums[0];
    let globalMax = nums[0];
    
    let currentMin = nums[0];
    let globalMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        
        currentMax = Math.max(num, currentMax + num);
        globalMax = Math.max(globalMax, currentMax);
        
        currentMin = Math.min(num, currentMin + num);
        globalMin = Math.min(globalMin, currentMin);
        
        totalSum += num;
    }

    if (globalMax < 0) {
        return globalMax;
    }
    
    return Math.max(globalMax, totalSum - globalMin);
};