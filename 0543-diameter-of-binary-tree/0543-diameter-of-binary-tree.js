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
var diameterOfBinaryTree = function(root) {
    let maxLen = 0;

    const getMaxLen = (node) => {
        if(!node) return 0;

        const leftLen = getMaxLen(node.left);
        const rightLen = getMaxLen(node.right);

        maxLen = Math.max(leftLen + rightLen, maxLen);

        return Math.max(leftLen, rightLen) + 1;
    }

    getMaxLen(root);

    return maxLen;
};