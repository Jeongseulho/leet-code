/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;

    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];

    const dfs = (i, j, idx) => {
        if(idx === word.length) return true;
        if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[idx]) return false;

        const originLetter = board[i][j];
        board[i][j] = 'visited';

        for(let k = 0; k < 4; k ++) {
            const ni = i + di[k];
            const nj = j + dj[k];
            if(dfs(ni, nj, idx + 1)) return true;
        }

        board[i][j] = originLetter;
        return false;
    }

    for (let si = 0; si < m; si++) {
        for (let sj = 0; sj < n; sj++) {
            if (board[si][sj] === word[0]) {
                 if (dfs(si, sj, 0)) {
                    return true;
                }
            }
        }
    }

    return false;
};