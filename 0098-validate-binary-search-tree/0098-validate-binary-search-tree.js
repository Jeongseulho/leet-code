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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let isValid = true;
    let preVal = -Infinity;
    const inOrder = (node) => {
        if(!node) return;
        if(!isValid) return;
        inOrder(node.left);
        if(node.val <= preVal) {
            isValid = false;
            return;
        }
        preVal = node.val;
        inOrder(node.right);
    }

    inOrder(root);

    return isValid;
};