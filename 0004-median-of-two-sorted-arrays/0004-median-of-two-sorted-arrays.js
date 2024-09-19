/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let low = 0;
    let high = nums1.length;
    const totalLen = nums1.length + nums2.length;
    const leftLen = Math.ceil(totalLen / 2);

    while (low <= high) {
        const mid1 = Math.floor((low + high) / 2);
        const mid2 = leftLen - mid1;

        const maxLeft1 = mid1 > 0 ? nums1[mid1 - 1] : Number.NEGATIVE_INFINITY;
        const minRight1 = mid1 < nums1.length ? nums1[mid1] : Number.POSITIVE_INFINITY;

        const maxLeft2 = mid2 > 0 ? nums2[mid2 - 1] : Number.NEGATIVE_INFINITY;
        const minRight2 = mid2 < nums2.length ? nums2[mid2] : Number.POSITIVE_INFINITY;

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if (totalLen % 2 === 0) return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            else return Math.max(maxLeft1, maxLeft2);
        } else if (maxLeft1 > minRight2) high = mid1 - 1;
        else low = mid1 + 1;
    }
};
