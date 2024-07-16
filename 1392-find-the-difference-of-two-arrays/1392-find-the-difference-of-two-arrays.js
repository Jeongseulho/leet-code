/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const duples = nums1.filter((num1) => nums2.includes(num1));
    console.log(duples)
    const ans1 = [...new Set(nums1.filter((num1) => !duples.includes(num1)))]
    const ans2 = [...new Set(nums2.filter((num2) => !duples.includes(num2)))]
    return [ans1, ans2];
};