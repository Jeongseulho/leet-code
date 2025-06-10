/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);
    let prevGroupEnd = dummy, cur = head;

    while(true) {
        let groupEnd = cur, count = 0;
        while (count < k && groupEnd) {
            groupEnd = groupEnd.next;
            count++;
        }
        if (count < k) break;

        let prev = groupEnd, groupStart = cur;
        for (let i = 0; i < k; i++) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        prevGroupEnd.next = prev;
        prevGroupEnd = groupStart;
    }

    return dummy.next;
};