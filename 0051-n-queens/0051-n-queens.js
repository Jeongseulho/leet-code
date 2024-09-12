/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const ans = [];
    const col = Array(n).fill(-1);

    const isValid = (row, setCol) => {
        for (let prevRow = 0; prevRow < row; prevRow++) {
            if (col[prevRow] === setCol || Math.abs(col[prevRow] - setCol) === Math.abs(prevRow - row)) {
                return false;
            }
        }
        return true;
    };

    const nQueen = (row) => {
        if (row === n) {
            const board = col.map((c) => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1));
            return ans.push(board);
        }

        for (let setCol = 0; setCol < n; setCol++) {
            if (isValid(row, setCol)) {
                col[row] = setCol;
                nQueen(row + 1);
                col[row] = -1;
            }
        }
    };

    nQueen(0);

    return ans;
}; 