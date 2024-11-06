/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    let top = 0;
    let bottom = n - 1;

    while (bottom > top) {
        for (let j = 0; j < n; j++) {
            [matrix[top][j], matrix[bottom][j]] = [matrix[bottom][j], matrix[top][j]];
        }
        top++;
        bottom--;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) { 
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};
