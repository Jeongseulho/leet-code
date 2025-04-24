/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const left = [0, -1];
    const right = [0, 1];
    const down = [1, 0];
    const up = [-1, 0];
    const dir = [right, down, left, up];
    const visited = Array.from({length:m}, () => Array(n).fill(false));
    let visitCnt = 0;
    let ci = 0;
    let cj = 0;
    let dirCnt = 0;
    const output = [];

    while(visitCnt < m * n) {
        output.push(matrix[ci][cj]);
        visited[ci][cj] = true;
        const ni = ci + dir[dirCnt][0];
        const nj = cj + dir[dirCnt][1];
        if(ni < 0 || ni >= m || nj < 0 || nj >= n || visited[ni][nj]) {
            dirCnt = (dirCnt + 1) % 4;
        }
        ci += dir[dirCnt][0];
        cj += dir[dirCnt][1];
        visitCnt += 1;
    }

    return output;
};