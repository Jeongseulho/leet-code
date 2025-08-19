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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let cnt = 0;
    let ans = null;
    const dfs = (node) => {
        if(!node || ans) return;

        dfs(node.left);

        if(ans) return;
        cnt += 1;
        if(cnt === k) {
            ans = node.val;
            return;
        }

        dfs(node.right);
    }

    dfs(root);
    return ans;
}; 