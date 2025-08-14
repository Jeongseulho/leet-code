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
var averageOfLevels = function(root) {
    const needVisit = [[ root, 1 ]];
    const infoPerLevel = new Map();

    while(needVisit.length) {
        const [ node, level ] = needVisit.shift();
        if(infoPerLevel.has(level)) {
            const info = infoPerLevel.get(level);
            info.sum += node.val;
            info.cnt += 1;

            infoPerLevel.set(level, {...info});
        } else {
            infoPerLevel.set(level, { sum : node.val, cnt : 1});
        }

        if(node.left) needVisit.push([ node.left, level + 1]);
        if(node.right) needVisit.push([ node.right, level + 1]);
    }

    const ans = [];
    for (const [ _, info ] of infoPerLevel) {
        ans.push(info.sum / info.cnt);
    } 

    return ans;
};