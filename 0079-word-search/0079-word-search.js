/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const di = [0, 0, -1, 1];
    const dj = [-1, 1, 0, 0];
    const m = board.length;
    const n = board[0].length;

    const dfs = (idx, ci, cj) => {
        if (idx === word.length) return true;
        if (ci < 0 || ci >= m || cj < 0 || cj >= n || board[ci][cj] !== word[idx]) return false;

        const temp = board[ci][cj];
        board[ci][cj] = '#';

        for (let k = 0; k < 4; k++) {
            const ni = ci + di[k];
            const nj = cj + dj[k];
            if (dfs(idx + 1, ni, nj)) return true;
        }

        board[ci][cj] = temp;

        return false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(0, i, j)) return true;
        }
    }

    return false;
};
