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
var goodNodes = function(root) {
    let cnt = 0;

    const dfs = (maxVal, node) => {
        if(node.val >= maxVal) cnt += 1;
        if(node.left) dfs(Math.max(node.val, maxVal), node.left);
        if(node.right) dfs(Math.max(node.val, maxVal), node.right);
    }

    dfs(root.val, root);

    return cnt;
};