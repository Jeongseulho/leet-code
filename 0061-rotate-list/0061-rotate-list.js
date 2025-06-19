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
var rotateRight = function(head, k) {
    if (!head || k === 0) return head;

    const list = [];
    const dummy = new ListNode(0, head);
    let cur = dummy;
    while(cur.next) {
        list.push(cur.next);
        cur = cur.next;
    }

    k = k % list.length;
    if(k === 0) return head;

    const rotate = () => {
        const tail = list.pop();
        const head = list[0];
        tail.next = head;
        list.unshift(tail);
        const nextTail = list[list.length - 1];
        nextTail.next = null;
        dummy.next = list[0];
    }


    for(let i = 0; i < k; i++) {
        rotate();
    }

    return dummy.next;
};