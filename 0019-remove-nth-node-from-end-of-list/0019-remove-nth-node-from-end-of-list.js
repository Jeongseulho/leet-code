/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let targetPrev = dummy;
    let last = head;

    for(let i = 0; i < n; i++) {
        last = last.next;
    }

    while(last) {
        last = last.next;
        targetPrev = targetPrev.next;
    }

    targetPrev.next = targetPrev.next.next;

    return dummy.next;
};