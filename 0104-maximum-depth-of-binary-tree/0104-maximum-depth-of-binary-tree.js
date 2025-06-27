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
    const getDepth = (node, curDepth) => {
        if(!node) return curDepth;
        const leftDepth = getDepth(node.left, curDepth + 1);
        const rightDepth = getDepth(node.right, curDepth + 1);
        return Math.max(leftDepth, rightDepth);
    }
    return getDepth(root, 0);
};