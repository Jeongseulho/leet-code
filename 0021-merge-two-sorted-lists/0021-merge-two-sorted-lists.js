/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummyHead = new ListNode();
    let cur = dummyHead;

    while(list1 && list2) {
        if(list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }

        cur = cur.next;
    }

    while(list1) {
        cur.next = list1;
        cur = cur.next;
        list1 = list1.next;
    }

    while(list2) {
        cur.next = list2;
        cur = cur.next;
        list2 = list2.next;
    }

    return dummyHead.next;
};