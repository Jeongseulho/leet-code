/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const nums = Array.from({ length: n}, (_, idx) => idx + 1);
    const ans = [];
    const combination = (comb, rests) => {
        if(comb.length === k) return ans.push(comb);

        rests.forEach((num, idx) => {
            combination([...comb, num], rests.slice(idx + 1));
        })
    }

    combination([], nums);

    return ans;
};