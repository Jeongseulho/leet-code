/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const ans = [];
    const di = [0, 1, 0, -1];
    const dj = [1, 0, -1, 0];
    let dir = 0;
    let ci = 0;
    let cj = 0;

    while(ans.length < (m * n)) {
        ans.push(matrix[ci][cj]);
        matrix[ci][cj] = '';
        const ni = ci + di[dir];
        const nj = cj + dj[dir];
        if(ni === -1 || nj === -1 || ni === m || nj === n || matrix[ni][nj] === '') dir = (dir + 1) % 4;
        ci += di[dir];
        cj += dj[dir];
    }

    return ans;
};