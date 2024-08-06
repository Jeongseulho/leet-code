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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const preFixSumCnt = new Map();
    preFixSumCnt.set(0, 1);

    const dfs = (node, sum) => {
        if(!node) return 0;
        sum += node.val;
        let pathCnt = preFixSumCnt.get(sum - targetSum) || 0;

        preFixSumCnt.set(sum, (preFixSumCnt.get(sum) || 0) + 1);
        pathCnt += dfs(node.right, sum);
        pathCnt += dfs(node.left, sum);
        preFixSumCnt.set(sum, (preFixSumCnt.get(sum) || 0) - 1);

        return pathCnt;
    }

    return dfs(root, 0);
};