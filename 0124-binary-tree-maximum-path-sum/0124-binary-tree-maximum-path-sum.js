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
    let maxSum = root.val;
    const dfs = (node) => {
        if(!node) return 0;

        const leftMaxSum = Math.max(dfs(node.left), 0);
        const rightMaxSum = Math.max(dfs(node.right), 0);

        maxSum = Math.max(maxSum, node.val + leftMaxSum + rightMaxSum);

        return node.val + Math.max(leftMaxSum, rightMaxSum);
    };
    dfs(root);

    return maxSum;
};