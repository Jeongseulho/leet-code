/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let lowI = 0, highI = m - 1;
    let targetRow = -1;
    while(lowI <= highI) {
        const mid = Math.floor((lowI + highI) / 2);
        if(matrix[mid][0] <= target && target <= matrix[mid][n - 1]) {
            targetRow = mid;
            break;
        } else if(target < matrix[mid][0]) highI = mid - 1;
        else lowI = mid + 1;
    }

    if(targetRow === -1) return false;

    let lowJ = 0, highJ = n - 1;
    while(lowJ <= highJ) {
        const mid = Math.floor((lowJ + highJ) / 2);
        if(matrix[targetRow][mid] === target) return true;
        else if(matrix[targetRow][mid] < target) lowJ = mid + 1;
        else highJ = mid - 1;
    }

    return false;
};