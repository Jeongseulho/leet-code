/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const nums = Array.from({ length : 9 }, (_, idx) => idx + 1);
    const ans = [];
    const combination = (comb, rests, sum) => {
        if(sum > n) return;
        if(comb.length === k) {
            if(sum === n) ans.push(comb);
            return;
        }

        rests.forEach((ele, idx) => {
            combination([...comb, ele], rests.slice(idx + 1), sum + ele);
        })
    }

    combination([], nums, 0);
    return ans;
};