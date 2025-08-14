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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const ans = [];

    const dfs = (node, level) => {
        if(!node) return;
        if(ans.length < level) ans.push(node.val);
        else ans[level - 1] = node.val;

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 1);

    return ans;
};