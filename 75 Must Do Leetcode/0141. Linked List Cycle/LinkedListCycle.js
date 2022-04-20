/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// O(n) ST
var hasCycle = function(head) {
    let visited = new Set();
    while (head) {
        if (visited.has(head))
            return true;

        visited.add(head);
        head = head.next;
    }
    return false;
};

// Mar 17
// Runtime: 69 ms, faster than 96.18% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 45.5 MB, less than 16.45% of JavaScript online submissions for Linked List Cycle.

// O(n) T, O(1) S
var hasCycle = function(head) {
    let first = head, second = head;
    while (second && second.next) {
        first = first.next;
        second = second.next.next;
        if (first === second)
            return true;
    }
    return false;
};

// Mar 17 
// Runtime: 71 ms, faster than 95.92% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 44.8 MB, less than 66.58% of JavaScript online submissions for Linked List Cycle.