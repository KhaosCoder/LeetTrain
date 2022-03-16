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
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var createList = (arr) => {
    var ll, nextNode;
    if (arr.length == 1)
        ll = new ListNode(arr[0]);
    else
        for (var i = 0; i < arr.length - 1; i++) {
            if (i == 0) {
                ll = new ListNode(arr[i]);
                nextNode = ll;
            }
            nextNode.next = new ListNode(arr[i + 1]);
            nextNode = nextNode.next;
        }
    return ll;
}

var printList = (list) => {
    let arr = [list.val];
    while (list.next) {
        arr.push(list.next.val);
        list = list.next;
    }
    console.log(arr);
}

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let [l,r] = [dummy,head];

    while (n > 0 && r) {
        r = r.next;
        n--;
    }

    while (r) {
        r = r.next;
        l = l.next;
    }

    l.next = l.next.next;

    return dummy.next;
};

printList(removeNthFromEnd(createList([1,2,3,4,5]),2));
printList(removeNthFromEnd(createList([1,2]),1));
printList(removeNthFromEnd(createList([1]),1));

// 12/Jan/2022
// Runtime: 122 ms, faster than 14.38% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 40.1 MB, less than 72.75% of JavaScript online submissions for Remove Nth Node From End of List.