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
    let n = 0;
    let node = root;
    const stack = [];

    while(node || stack.length) {
        while(node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        n += 1;
        if(n === k) return node.val;
        node = node.right;
    }
};