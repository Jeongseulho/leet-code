/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const n = matrix[0].length
    const m = matrix.length;

    let si = 0;
    let ei = m - 1;
    let targeti = 0;

    while(si <= ei) {
        const midi = Math.floor((si + ei)/2);
        const smidi = matrix[midi][0];
        const emidi = matrix[midi][n - 1];
        if(smidi <= target && target <= emidi) {
            targeti = midi;
            break;
        }
        if(target < smidi) {
            ei = midi - 1;
        } else {
            si = midi + 1;
        }
    }

    let sj = 0;
    let ej = n - 1;
    let targetj = 0;

    while(sj <= ej) {
        const midj = Math.floor((sj + ej)/2);
        if(target === matrix[targeti][midj]) {
            return true;
        }
        if(target < matrix[targeti][midj]) {
            ej = midj - 1;
        } else {
            sj = midj + 1;
        }
    }

    return false;
};