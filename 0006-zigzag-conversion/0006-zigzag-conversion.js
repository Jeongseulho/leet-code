/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    const arr = Array.from({ length : numRows }, () => Array(1000).fill(''));
    let idx = 0;
    let i = 0;
    let j = 0;
    while(idx < s.length) {

        while(idx < s.length && i < numRows) {
            arr[i][j] = s[idx];
            idx += 1;
            i += 1;
        }
        i -= 2;
        j += 1;
        
        while(idx < s.length && i > -1 && j < 1000) {
            arr[i][j] = s[idx];
            idx += 1;
            i -= 1;
            j += 1;
        }
        i += 2;
        j -= 1;

    }

    return arr.reduce((acc, cur) => acc + cur.join(''), '')
};