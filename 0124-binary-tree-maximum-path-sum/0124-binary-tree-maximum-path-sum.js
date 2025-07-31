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
var maxPathSum = function(root) {
    let maxSum = 0;
    const dfs = (node) => {
        if(!node) return 0;
        const leftPathMaxSum = Math.max(0, dfs(node.left));
        const rightPathMaxSum = Math.max(0, dfs(node.right));
        const pathSum = leftPathMaxSum + node.val + rightPathMaxSum;
        maxSum = Math.max(maxSum, pathSum);

        return Math.max(leftPathMaxSum, rightPathMaxSum) + node.val;
    }

    dfs(root);
    return maxSum;
};