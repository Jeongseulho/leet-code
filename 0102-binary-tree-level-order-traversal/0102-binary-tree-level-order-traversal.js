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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ans = {};

    const traversal = (node, level) => {
        if(!node) return;

        if(level in ans) ans[level].push(node.val);
        else ans[level] = [node.val];

        traversal(node.left, level + 1);
        traversal(node.right, level + 1);
    };

    traversal(root, 0);

    return Object.values(ans);
};