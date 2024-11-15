/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;

    const transNumToPos = (num) => {
        const row = Math.floor((num - 1) / n);
        const col = (num - 1) % n;
        const actualRow = n - 1 - row;
        const actualCol = row % 2 === 0 ? col : n - 1 - col;
        return [actualRow, actualCol];
    };

    const needVisit = [[1, 0]];
    const visited = new Set();
    visited.add(1);
    while(needVisit.length) {
        const [cur, cnt] = needVisit.shift();
        for(let dice = 1; dice < 7; dice++) {
            let next = cur + dice;
            if(!visited.has(next)) {
                const [ni, nj] = transNumToPos(next, n);
                if(board[ni][nj] !== -1) next = board[ni][nj];
                if(next >= n**2) return cnt + 1;
                needVisit.push([next, cnt + 1]);
                visited.add(next); 
            }
        }
    }

    return -1;
};