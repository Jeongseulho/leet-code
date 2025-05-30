/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let fRow = false;
    let fCol = false;

    for(let i = 0; i < m; i++) {
        if(matrix[i][0] === 0) {
            fCol = true;
            break;
        }
    }

    for(let j = 0; j < n; j++) {
        if(matrix[0][j] === 0) {
            fRow = true;
            break;
        }
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1; i < m; i++) {
        if(matrix[i][0] === 0) {
            for(let j = 0; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for(let j = 1; j < n; j++) {
        if(matrix[0][j] === 0) {
            for(let i = 0; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    if(fRow) {
        for(let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    if(fCol) {
        for(let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};