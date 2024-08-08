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
    const rightSide = new Map();
    const needVisit = [[root, 0]];

    while(needVisit.length) {
        const [node, depth] = needVisit.shift();
        if(!node) continue;

        rightSide.set(depth, node.val);

        needVisit.push([node.left, depth + 1]);
        needVisit.push([node.right, depth + 1]);
    }

    return [...rightSide.values()];
};