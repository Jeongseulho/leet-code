/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const checkOrigin = Array.from({ length : m }, () => Array(n).fill(true));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 0 && checkOrigin[i][j]) {
                for(let adji = 0; adji < m; adji++) {
                    if(matrix[adji][j] === 0) continue;
                    matrix[adji][j] = 0;
                    checkOrigin[adji][j] = false;
                }
                for(let adjj = 0; adjj < n; adjj++) {
                    if(matrix[i][adjj] === 0) continue;
                    matrix[i][adjj] = 0;
                    checkOrigin[i][adjj] = false;
                }
            }
        }
    }
};