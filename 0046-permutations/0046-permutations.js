/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    const permutation = (perm, rests) => {
        if(perm.length === nums.length) return ans.push(perm);

        rests.forEach((ele, idx) => {
            permutation([...perm, ele], rests.filter((_, restIdx) => idx !== restIdx));
        })
    }

    permutation([], nums);

    return ans;
};