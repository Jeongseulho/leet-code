/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    const multipleComb = (comb, rests, sum) => {
        if(sum >= target) {
            if(sum === target) ans.push(comb);
            return;
        }
        rests.forEach((ele, idx) => {
            multipleComb([...comb, ele], rests.slice(idx), sum + ele);
        })
    }

    multipleComb([], candidates, 0);

    return ans;
};