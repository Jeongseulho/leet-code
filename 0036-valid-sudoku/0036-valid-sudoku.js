/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++) {
        const nums = new Set();
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') continue;
            if(nums.has(board[i][j])) return false;
            nums.add(board[i][j]);
        }
    }

    for(let j = 0; j < 9; j++) {
        const nums = new Set();
        for(let i = 0; i < 9; i++) {
            if(board[i][j] === '.') continue;
            if(nums.has(board[i][j])) return false;
            nums.add(board[i][j]);
        }
    }

    for(let i = 0; i < 9; i += 3) {
        for(let j = 0; j < 9; j += 3) {
            const nums = new Set();
            for(let di = 0; di < 3; di++){
                for(let dj = 0; dj < 3; dj++) {
                    if(board[i + di][j + dj] === '.') continue;
                    if(nums.has(board[i + di][j + dj])) return false;
                    nums.add(board[i + di][j + dj]);
                }
            }
        }
    }

    return true;
};