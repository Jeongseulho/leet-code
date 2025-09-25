/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    const permutation = (perm, rests) => {
        if(perm.length === nums.length) return ans.push(perm);

        rests.forEach((rest, idx) => {
            permutation([...perm, rest], rests.filter((_, selectIdx) => idx !== selectIdx));
        })
    }

    permutation([], nums);

    return ans;
};