/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    return buildTree(grid);
};

function buildTree(grid) {
    if (isLeaf(grid)) {
        const val = !!grid[0][0];
        return new _Node(val, true, null, null, null, null);
    }
    const { topLeft, topRight, bottomLeft, bottomRight } = getSubGrids(grid);
    const root = new _Node(
        true,
        false,
        buildTree(topLeft),
        buildTree(topRight),
        buildTree(bottomLeft),
        buildTree(bottomRight)
    );
    return root;
}

function isLeaf(grid) {
    const n = grid.length;
    const val = grid[0][0];
    for(i = 0; i < n; i++) {
        for(j = 0 ; j < n; j++) {
            if(val !== grid[i][j]) return false;
        }
    }

    return true;
}

function getSubGrids(grid) {
    const n = grid.length;
    const mid = n / 2;

    const topLeft = [];
    const topRight = [];
    const bottomLeft = [];
    const bottomRight = [];

    for (let i = 0; i < n; i++) {
        if (i < mid) {
            topLeft.push(grid[i].slice(0, mid));
            topRight.push(grid[i].slice(mid));
        } else {
            bottomLeft.push(grid[i].slice(0, mid));
            bottomRight.push(grid[i].slice(mid));
        }
    }

    return { topLeft, topRight, bottomLeft, bottomRight };
}