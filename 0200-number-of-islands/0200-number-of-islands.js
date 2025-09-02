/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let cnt = 0;
    const m = grid.length;
    const n = grid[0].length;

    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    const dfs = (si, sj) => {
        cnt += 1;
        const needVisit = [[si, sj]];
        grid[si][sj] = '0';

        while(needVisit.length) {
            const [ci, cj] = needVisit.pop();
            for(let k = 0; k < 4; k++) {
                const ni = ci + di[k];
                const nj = cj + dj[k];
                if(ni < 0 || ni >= m || nj < 0 || nj >= n || grid[ni][nj] === '0') continue;
                needVisit.push([ni, nj]);
                grid[ni][nj] = '0';
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') dfs(i, j);
        }
    }

    return cnt;
};