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
var maxDepth = function(root) {
    if (!root) return 0;

    const needVisit = [[root, 1]];
    let maxDepth = 0;

    while (needVisit.length) {
        const [node, depth] = needVisit.pop();
        maxDepth = Math.max(maxDepth, depth);
        if (node.left) needVisit.push([node.left, depth + 1]);
        if (node.right) needVisit.push([node.right, depth + 1]);
    }

    return maxDepth;
};
