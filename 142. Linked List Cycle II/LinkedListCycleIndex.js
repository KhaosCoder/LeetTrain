/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head, fast = head;
    let hasCycle = false;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }
    
    if (hasCycle) {
        let tracker = head;
        while (tracker !== slow) {
            tracker = tracker.next;
            slow = slow.next;
        }
        return tracker;
    }
    
    return null;
};

// Mar 17
// Runtime: 68 ms, faster than 99.48% of JavaScript online submissions for Linked List Cycle II.
// Memory Usage: 44.8 MB, less than 44.19% of JavaScript online submissions for Linked List Cycle II.