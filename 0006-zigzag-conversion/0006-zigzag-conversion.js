/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    const arr = Array. from({ length : numRows }, () => []);
    
    let idx = 0;
    let dir = 1;
    for(const char of s) {
        arr[idx].push(char);
        if(idx === 0) dir = 1;
        else if(idx === numRows - 1) dir = -1;
        
        idx += dir;
    }

    return arr.map((strs) => strs.join('')).join('');
};