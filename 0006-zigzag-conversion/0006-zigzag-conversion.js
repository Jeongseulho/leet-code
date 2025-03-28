/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    const arr = Array.from({length : numRows}, () => Array(1000).fill(''));
    let i = 0;
    let j = 0;
    let dir = [1, 0];
    for(const str of s) {
        arr[i][j] = str;
        const ni = i + dir[0];
        
        if(ni >= numRows) dir = [-1, 1];
        if(ni === -1) dir = [1, 0];
        i += dir[0];
        j += dir[1];
    }


    return arr.map((ar) => ar.join('')).join('');
};