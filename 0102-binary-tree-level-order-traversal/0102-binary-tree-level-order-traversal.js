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
    if(!root) return [];
    const nodePerLevel = [];
    const needVisit = [[ root, 1 ]];
    while (needVisit.length) {
        const [ node, level ] = needVisit.shift();

        if(nodePerLevel.length < level) nodePerLevel.push([ node.val ]);
        else nodePerLevel[level - 1].push(node.val);

        if(node.left) needVisit.push([ node.left, level + 1 ]);
        if(node.right) needVisit.push([ node.right, level + 1 ]);
    }

    return nodePerLevel;
};