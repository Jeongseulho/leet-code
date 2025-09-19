/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    const ans = [];
    const numCharMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }

    const combination = (comb, restNums) => {
        if (digits.length === comb.length) return ans.push(comb.join(''));

        restNums.forEach((num, idx) => {
            for (const letter of numCharMap[num]) {
                combination([...comb, letter], restNums.slice(idx + 1));
            }
        })
    }

    combination([], digits.split(''));

    return ans;
};