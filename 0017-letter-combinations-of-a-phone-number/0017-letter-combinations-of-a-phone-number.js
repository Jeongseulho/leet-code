/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    const ans = [];
    const numCharMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };


    const dfs = (index, currentStr) => {
        if (index === digits.length) {
            ans.push(currentStr);
            return;
        }

        const letters = numCharMap[digits[index]];

        for (const letter of letters) {
            dfs(index + 1, currentStr + letter);
        }
    };

    dfs(0, "");

    return ans;
};