/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    let maxTime = 0;

    const bfs = (starts) => {
        const needVisit = [...starts];
        while(needVisit.length) {
            const [ci, cj, time] = needVisit.shift();
            for(let k = 0; k < 4; k++) {
                const ni = di[k] + ci;
                const nj = dj[k] + cj;
                if(ni > -1 && ni < m && nj > -1 && nj < n && grid[ni][nj] === 1) {
                    needVisit.push([ni, nj, time + 1]);
                    grid[ni][nj] = 2;
                    maxTime = time + 1;
                }
            }
        }
    }

    const starts = [];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 2) starts.push([i, j, 0]);
        }
    }
    bfs(starts)

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) return -1;
        }
    }

    return maxTime;
};