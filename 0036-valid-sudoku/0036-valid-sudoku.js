/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++) {
        const row = new Set();
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') continue;
            if(row.has(board[i][j])) return false;
            row.add(board[i][j]);
        }
    }

    for(let j = 0; j < 9; j++) {
        const col = new Set();
        for(let i = 0; i < 9; i++) {
            if(board[i][j] === '.') continue;
            if(col.has(board[i][j])) return false;
            col.add(board[i][j]);
        }
    }

    for(let k = 0; k < 9; k += 3) {
        for(let l = 0; l < 9; l += 3) {
            const box = new Set();
            for(let i = k; i < k + 3; i++) {
                for(let j = l; j < l + 3; j++) {
                    if(board[i][j] === '.') continue;
                    if(box.has(board[i][j])) return false;
                    box.add(board[i][j]);
                }
            }
        }
    }

    return true;
};