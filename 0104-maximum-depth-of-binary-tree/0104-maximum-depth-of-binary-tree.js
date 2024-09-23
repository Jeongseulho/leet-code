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
var maxDepth = function(root) {
    let ans = 0;
    if(!root) return 0;
    
    const dfs = (node, depth) => {
        if(!node) return;
        ans = Math.max(depth, ans);

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 1);
    return ans;
};