/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const board = Array(n).fill(-1);
    let cnt = 0;
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i] === col) return false;
            if (row - i === Math.abs(col - board[i])) return false;
        }
        return true;
    }

    const dfs = (row) => {
        if(row === n) return cnt += 1;
        for (let col = 0; col < n; col++) {
            if(isValid(row, col)) {
                board[row] = col;
                dfs(row + 1);
                board[row] = -1;
            }
        }
    }

    dfs(0);

    return cnt;
};