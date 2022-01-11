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
    for (var i =0; i < arr.length-1; i++) {
        if (i == 0) {
            ll = new ListNode(arr[i]);
            nextNode = ll;
        }
        nextNode.next = new ListNode(arr[i+1]);
        nextNode = nextNode.next;
    }
    return ll;
}

var size = (list) => {
    let count = 0; 
    let node = list;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

var removeNthFromEnd = function(head, n) {
    var s = size(head);
    if (s == 1 & n == 1 )
        return new ListNode();
    var [node,i,limit] = [head,1,s-n]
    while (i <= limit) {
        node = node.next;
        if (i == limit - 1) {
            node.next = node.next.next;
        }
        i++;
    }
    //console.log(node.val);
    return head;
};

removeNthFromEnd(createList([1,2,3,4,5]),2);
console.log(removeNthFromEnd(createList([1]),1))