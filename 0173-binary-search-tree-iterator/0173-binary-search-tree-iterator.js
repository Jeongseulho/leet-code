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
 */
var BSTIterator = function(root) {
    this.arr = [];
    this.node = root;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    while(this.node) {
        this.arr.push(this.node);
        this.node = this.node.left;
    }
    const last = this.arr.pop();
    this.node = last.right;
    return last.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.arr.length > 0 || this.node !== null;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */