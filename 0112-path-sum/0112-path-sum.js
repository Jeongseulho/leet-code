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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const isLeaf = (node) => {
        if(node.left === null && node.right === null) return true;
        return false;
    }
    let res = false;

    const dfs = (node, curSum) => {
        if(isLeaf(node)) {
            if(curSum === targetSum) {
                res = true;
                return;
            }
        } 
        if(node.left) {
            dfs(node.left, curSum + node.left.val);
        }
        if(node.right) {
            dfs(node.right, curSum + node.right.val);
        }
    }

    if(root) {
        dfs(root, root.val);
    }

    return res;
};