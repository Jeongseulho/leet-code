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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const ans = {};

    const dfs = (node, depth) => {
        if(!node) return;

        ans[depth] = node.val;
        if(node.left) dfs(node.left, depth + 1);
        if(node.right) dfs(node.right, depth + 1);
    }

    if(root) dfs(root, 0);

    return Object.values(ans);
};