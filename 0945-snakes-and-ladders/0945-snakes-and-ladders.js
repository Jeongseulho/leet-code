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

    while (needVisit.length) {
        const [cur, cnt] = needVisit.shift();

        for (let dice = 1; dice <= 6; dice++) {
            let next = cur + dice;

            const [ni, nj] = transNumToPos(next);
            if (board[ni][nj] !== -1) next = board[ni][nj];

            if (next >= n * n) return cnt + 1;

            if (!visited.has(next)) {
                visited.add(next);
                needVisit.push([next, cnt + 1]);
            }
        }
    }

    return -1;
};