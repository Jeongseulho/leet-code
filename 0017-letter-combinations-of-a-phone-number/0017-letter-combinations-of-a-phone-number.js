/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const possibleLetter = digits.split('').map((digit) => letters[digit].split(''));

    const ans = [];
    const combination = (comb, selectIdx) => {
        if(comb.length === digits.length) {
            if(comb.length) ans.push(comb);
            return;
        }

        possibleLetter[selectIdx].forEach((letter) => {
            combination(comb + letter, selectIdx + 1);
        })
    }

    combination('', 0);
    return ans;
};