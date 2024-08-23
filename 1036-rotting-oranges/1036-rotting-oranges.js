/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let maxTime = 0;
    const m = grid.length;
    const n = grid[0].length;
    
    const bfs = (starts) => {
        const needVisit = [...starts];
        const di = [0, 0, -1, 1];
        const dj = [-1, 1, 0, 0];
        while(needVisit.length) {
            const [ci, cj, time] = needVisit.shift();
            for(let k = 0; k < 4; k++) {
                const ni = ci + di[k];
                const nj = cj + dj[k];
                if(ni > -1 && ni < m && nj > -1 && nj < n && grid[ni][nj] === 1) {
                    needVisit.push([ni, nj, time + 1]);
                    maxTime = Math.max(maxTime, time + 1);
                    grid[ni][nj] = 2;
                }
            }
        }
    }

    const searchStart = () => {
        const starts = [];
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === 2) starts.push([i, j, 0]);
            }
        }
        return starts;
    }

    const isSomeFresh = () => {
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === 1) return true;
            }
        }
        return false;
    }

    const starts = searchStart();
    if(starts.length) bfs(starts);
    
    return isSomeFresh() ? -1 : maxTime;
};