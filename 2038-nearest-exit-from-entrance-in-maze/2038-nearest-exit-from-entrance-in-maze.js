/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const [si, sj] = entrance;
    const needVisit = [[si, sj, 0]];
    maze[si][sj] = 'x';
    const m = maze.length;
    const n = maze[0].length;
    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    while(needVisit.length) {
        const [ci, cj, step] = needVisit.shift();
        for(let k = 0; k < 4; k++) {
            const ni = ci + di[k];
            const nj = cj + dj[k];
            if(ni < m && ni > -1 && nj < n && nj > -1 && maze[ni][nj] === '.') {
                if(ni === 0 || ni === m - 1 || nj === 0 || nj === n - 1) return step + 1;
                needVisit.push([ni, nj, step + 1]);
                maze[ni][nj] = 'x';
            }
        }
    }

    return -1;
};