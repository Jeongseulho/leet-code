/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const di = [1, -1, 0, 0];
    const dj = [0, 0, 1, -1];
    const m = board.length;
    const n = board[0].length;
    const check = Array.from({ length : m }, () => Array(n).fill(false));

    const dfs = (si, sj) => {
        const needVisit = [[si, sj]];
        const visit = [[si, sj]];
        check[si][sj] = true;
        let isSurround = true;

        while(needVisit.length) {
            const [ci, cj] = needVisit.pop();
            for(let k = 0; k < 4; k++) {
                ni = ci + di[k];
                nj = cj + dj[k];
                if(ni < 0 || ni >= m || nj < 0 || nj >= n) isSurround = false;
                else if(!check[ni][nj] && board[ni][nj] === 'O') {
                    check[ni][nj] = true;
                    visit.push([ni, nj]);
                    needVisit.push([ni, nj]);
                }
            }
        }
        if(isSurround) visit.forEach(([i, j]) => board[i][j] = 'X');
    }

    for(let si = 0; si < m; si++) {
        for(let sj = 0; sj < n; sj++) {
            if(board[si][sj] === 'O' && !check[si][sj]) dfs(si, sj);
        }
    }
};