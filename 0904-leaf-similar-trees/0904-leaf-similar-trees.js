/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaf1 = [];
    const leaf2 = [];

    const dfs = (leaf, node) => {
        if(!node) return;
        if(!node.right && !node.left) {
            leaf.push(node);
            return;
        }
        dfs(leaf, node.left);
        dfs(leaf, node.right);
    }

    dfs(leaf1, root1);
    dfs(leaf2, root2);

    return JSON.stringify(leaf1) === JSON.stringify(leaf2);
};