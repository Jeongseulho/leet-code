/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rows = grid.map((row) => row.toString());
    let cnt = 0;
    const cols = [];
    for(let i = 0; i < grid.length; i++) {
        const col = [];
        for(let j = 0; j < grid.length; j++) {
            col.push(grid[j][i]);
        }

        for(const row of rows) {
            if(row === col.toString()) cnt += 1;
        }
    }
    return cnt;
};