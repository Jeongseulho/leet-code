/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;
    const di = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dj = [-1, 0, 1, -1, 1, -1, 0, 1];
    const nextStates = [];

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let neighborDead = 0;
            let neighborLive = 0;
            for(let k = 0; k < 8; k++) {
                const ni = i + di[k];
                const nj = j + dj[k];
                if(ni < 0 || ni >= m || nj < 0 || nj >= n) continue;
                if(board[ni][nj] === 0) neighborDead += 1;
                if(board[ni][nj] === 1) neighborLive += 1;
            }
            if(board[i][j] === 0 && neighborLive === 3) nextStates.push([i, j, 1]);
            if(board[i][j] === 1) {
                if(neighborLive < 2) nextStates.push([i, j, 0]);
                else if(neighborLive > 3) nextStates.push([i, j, 0]);
            }
        }
    }

    nextStates.forEach(([i, j, state]) => board[i][j] = state);
};