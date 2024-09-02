/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const possibleLetter = digits.split('').map((digit) => letters[digit].split(''));

    const ans = [];
    const combination = (comb, numIdx) => {
        if(comb.length === digits.length) {
            if(comb.length) ans.push(comb.join(''));
            return;
        }
        possibleLetter[numIdx].forEach((ele) => {
            combination([...comb, ele], numIdx + 1);
        })
    }

    combination([], 0);
    return ans;
};