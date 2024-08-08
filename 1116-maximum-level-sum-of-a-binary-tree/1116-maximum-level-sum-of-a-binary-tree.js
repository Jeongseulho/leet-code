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
var maxLevelSum = function(root) {
    const sum = new Map();
    const needVisit = [[root, 1]];

    while(needVisit.length) {
        const [node, level] = needVisit.shift();
        if(!node) continue;
        if(!sum.has(level)) sum.set(level, node.val);
        else sum.set(level, sum.get(level) + node.val);

        needVisit.push([node.left, level + 1]);
        needVisit.push([node.right, level + 1]);
    }

    let maxSum = -Infinity;
    let maxSumLevel = 0;

    for (let [level, levelSum] of sum.entries()) {
        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxSumLevel = level;
        } else if (levelSum === maxSum && level < maxSumLevel) {
            maxSumLevel = level;
        }
    }

    return maxSumLevel;
};