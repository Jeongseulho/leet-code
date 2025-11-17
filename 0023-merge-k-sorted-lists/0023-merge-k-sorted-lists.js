/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    while(lists.length > 1) {
        const merged = [];
        for(let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            merged.push(mergeTwoList(l1, l2));
        }
        lists = merged;
    }

    return lists[0];
};

function mergeTwoList(l1, l2) {
    let dummy = new ListNode(0);
    let prev = dummy;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 ?? l2;
    return dummy.next;
}