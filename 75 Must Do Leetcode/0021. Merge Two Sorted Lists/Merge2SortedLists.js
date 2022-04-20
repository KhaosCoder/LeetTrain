/**
 * @param {ListNode} list1
 * @param {ListNode} list2
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

var mergeTwoLists = function (list1, list2) {
    var res = new ListNode();
    var nextNode = res;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            nextNode.next = list2;
            list2 = list2.next;
        } else {
            nextNode.next = list1;
            list1 = list1.next;
        }
        nextNode = nextNode.next;
    }
    
    if (list1) nextNode.next = list1;
    if (list2) nextNode.next = list2;
    return res.next;
};

printList(mergeTwoLists(createList([1,2,4]), createList([1,3,4])));
// printList(mergeTwoLists(createList([]), createList([])));
// printList(mergeTwoLists(createList([]), createList([0])));

// 13/Jan/2022
// Runtime: 156 ms, faster than 6.65% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40 MB, less than 97.37% of JavaScript online submissions for Merge Two Sorted Lists.