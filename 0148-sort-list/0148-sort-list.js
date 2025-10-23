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
var sortList = function(head) {
    if(!head || !head.next) return head;

    const rightHead = getRightHead(head);
    const left = sortList(head);
    const right = sortList(rightHead);

    return merge(left, right);
};

function getRightHead(head) {
    let slow = head;
    let fast = head;
    let slowPrev = null;

    while(fast && fast.next) {
        slowPrev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    slowPrev.next = null;
    return slow;
}

function merge(left ,right) {
    const dummy = new ListNode(0);
    let tail = dummy;

    while(left && right) {
        if(left.val < right.val) {
            tail.next = left;
            left = left.next;
        } else {
            tail.next = right;
            right = right.next;
        }
        tail = tail.next;
    }

    tail.next = left || right;
    return dummy.next;
}