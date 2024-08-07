/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let maxCnt = 0;

    const dfs = (node, prevDir, cnt) => {
        if (!node) return;

        maxCnt = Math.max(cnt, maxCnt);

        if (prevDir === 'left') {
            dfs(node.right, 'right', cnt + 1);
            dfs(node.left, 'left', 1);
        } else {
            dfs(node.left, 'left', cnt + 1);
            dfs(node.right, 'right', 1);
        }
    }

    dfs(root.left, 'left', 1);
    dfs(root.right, 'right', 1);

    return maxCnt;
};
