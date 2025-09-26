/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    const combination = (comb, sum, rests) => {
        if(sum > target) return;
        if(sum === target) return ans.push(comb);

        rests.forEach((selectNum, idx) => {
            combination([...comb, selectNum], sum + selectNum, rests.slice(idx));
        })
    }

    combination([], 0, candidates);

    return ans;
};