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
    const dummy = new ListNode(0, head);
    let prevGroupEnd = dummy;
    let cur = head;

    while(true) {

        let cnt = 0;
        let nextGroupStart = cur;
        while(nextGroupStart && cnt < k) {
            cnt += 1;
            nextGroupStart = nextGroupStart.next;
        }
        if(cnt < k) return dummy.next;

        const groupStart = cur;

        let prev = nextGroupStart;
        for(let i = 0; i < k; i++) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        prevGroupEnd.next = prev;
        prevGroupEnd = groupStart;
    }

    return dummy.next;
};