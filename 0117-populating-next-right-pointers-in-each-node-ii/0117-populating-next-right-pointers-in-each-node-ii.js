/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return root;
    const queue = [root];
    let curLevelNodes = [root];

    while(curLevelNodes.length) {
        const nextLevelNodes = [];
        queue.push(null);
        curLevelNodes.forEach((node) => {
            if (node.left) {
                queue.push(node.left);
                nextLevelNodes.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
                nextLevelNodes.push(node.right);
            }
        })
        curLevelNodes = [...nextLevelNodes];
    }
    
    for (let i = 0; i < queue.length - 1; i++) {
        const cur = queue[i];
        const nxt = queue[i + 1];
        if(cur) {
            cur.next = nxt;
        }
    }

    return root;
};