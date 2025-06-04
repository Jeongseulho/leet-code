/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    const hash = new Map();
    let cur = head;

    while(cur) {
        hash.set(cur, new _Node(cur.val));
        cur = cur.next;
    }

    cur = head;
    while(cur) {
        const copied = hash.get(cur);
        copied.next = hash.get(cur.next) ?? null;
        copied.random = hash.get(cur.random) ?? null;

        cur = cur.next;
    }

    return hash.get(head);
};