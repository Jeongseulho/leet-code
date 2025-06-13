/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0, head);
    let duplePrev = dummy;
    let cur = head;

    while (cur) {
        let isDuplicate = false;

        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next;
            isDuplicate = true;
        }

        if (isDuplicate) {
            duplePrev.next = cur.next;
        } else {
            duplePrev = duplePrev.next;
        }

        cur = cur.next;
    }

    return dummy.next;
};