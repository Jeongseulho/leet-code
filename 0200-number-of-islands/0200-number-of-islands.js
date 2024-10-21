/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];

    const dfs = (si, sj) => {
        const needVisit = [[si, sj]];
        
        while(needVisit.length) {
            const [ci, cj] = needVisit.pop();
            for(let k = 0; k < 4; k++) {
                const ni = ci + di[k];
                const nj = cj + dj[k];
                if(ni > -1 && ni < m && nj > -1 && nj < n && grid[ni][nj] === '1') {
                    needVisit.push([ni, nj]);
                    grid[ni][nj] = '0';
                }
            }
        }
    }

    let cnt = 0;

    for(let si = 0; si < m; si++) {
        for(let sj = 0; sj < n; sj++) {
            if(grid[si][sj] === '1') {
                dfs(si, sj)
                cnt += 1;
            }
        }
    }

    return cnt;
};