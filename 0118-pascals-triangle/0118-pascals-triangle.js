/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = Array.from({ length : numRows }, () => Array().fill(0));
    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j < i + 1; j++) {
            if(j === i || j === 0) triangle[i][j] = 1;
            else triangle[i][j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
        }
    }

    return triangle;
};