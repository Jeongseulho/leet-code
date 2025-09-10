/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;

const convertPosToIdx = (pos) => {
    // 1번 칸부터 시작하므로 pos - 1
    // 보드 아래에서부터 0번 줄, 1번 줄...
    const rowFromBottom = Math.floor((pos - 1) / n);
    // 해당 줄의 왼쪽에서부터 몇 번째 칸인지
    const colFromLeft = (pos - 1) % n;

    // 실제 배열 인덱스 i (위에서부터)
    const i = n - 1 - rowFromBottom;
    
    let j;
    // 아래에서부터 센 줄(rowFromBottom)이 짝수 줄이면 (0, 2, 4...) 왼쪽 -> 오른쪽
    if (rowFromBottom % 2 === 0) {
        j = colFromLeft;
    } else { // 홀수 줄이면 (1, 3, 5...) 오른쪽 -> 왼쪽
        j = n - 1 - colFromLeft;
    }

    return {i, j};
}

    const queue = [[1, 0]];
    const visited = new Set();
    visited.add(1);
    
    while (queue.length) {
        const [pos, cnt] = queue.shift();
        for(let dice = 1; dice < 7; dice++) {
            let next = dice + pos;
            const {i, j} = convertPosToIdx(next);
            if(board[i][j] !== -1) next = board[i][j];
            if(next >= n * n) return cnt + 1;
            
            if(visited.has(next)) continue;

            queue.push([next, cnt + 1]);
            visited.add(next);
        }
    }

    return -1;
};