/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(inorder.length === 0) return null;

    const headVal = preorder.shift();
    const head = new TreeNode(headVal);

    const headIndex = inorder.indexOf(headVal);

    head.left = buildTree(preorder, inorder.slice(0, headIndex));
    head.right = buildTree(preorder, inorder.slice(headIndex + 1));

    return head;
};