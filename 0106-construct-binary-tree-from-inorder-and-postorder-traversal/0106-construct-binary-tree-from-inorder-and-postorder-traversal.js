/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null;

    const rootVal = postorder.pop();
    const root = new TreeNode(rootVal);

    const rootIndex = inorder.indexOf(rootVal);

    root.right = buildTree(inorder.slice(rootIndex + 1), postorder);
    root.left = buildTree(inorder.slice(0, rootIndex), postorder);

    return root;
};