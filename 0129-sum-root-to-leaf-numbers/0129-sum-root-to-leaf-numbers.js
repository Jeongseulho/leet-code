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
var sumNumbers = function(root) {
    const nums = [];
    const dfs = (node, strNum) => {
        if(!node.left && !node.right) {
            nums.push(strNum + String(node.val));
            return;
        }
        if(node.left) dfs(node.left, strNum + String(node.val));
        if(node.right) dfs(node.right, strNum + String(node.val));
    }
    dfs(root, '');
    return nums.reduce((acc, cur) => {
        return acc + Number(cur); 
    }, 0)
};