/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return;

    if(root === p || root === q) return root;

    const leftSub = lowestCommonAncestor(root.left, p, q);
    const rightSub = lowestCommonAncestor(root.right, p, q);

    if(leftSub && rightSub) return root;

    return leftSub || rightSub;
};