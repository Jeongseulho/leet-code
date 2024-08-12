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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    const dfs = (node) => {
        if(!node) return null;
        if(node.val === key) {
            if(!node.left) return node.right;
            if(!node.right) return node.left;

            let cur = node.right;
            while(cur.left) cur = cur.left;
            cur.left = node.left;
            return node.right;
        }

        if(key > node.val) node.right = dfs(node.right);
        else node.left = dfs(node.left);
        return node;
    }
    return dfs(root)
};