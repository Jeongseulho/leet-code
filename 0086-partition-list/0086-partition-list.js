/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const leftHead = new ListNode();
    const rightHead = new ListNode();

    let cur = head;
    let left = leftHead;
    let right = rightHead;

    while(cur) {
        if(cur.val < x) {
            left.next = cur;
            left = left.next;
        } else {
            right.next = cur;
            right = right.next;            
        }
        cur = cur.next;
    }

    right.next = null;
    left.next = rightHead.next;

    return leftHead.next;
};