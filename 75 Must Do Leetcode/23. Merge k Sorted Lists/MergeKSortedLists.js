/**
 * @param {ListNode[]} lists
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

var mergeKLists = function(lists) {
    if (lists.length == 0)
        return null;
    
    while (lists.length > 1) {
        let merged = [];
        for (var i=0; i < lists.length; i+=2) {
            let l1 = lists[i];
            let l2 = lists[i+1] ? lists[i+1] : null;
            merged.push(mergeTwoLists(l1,l2));
        }
        lists = merged;
    }
    return lists[0];
};

printList(mergeKLists([createList([1,4,5]),createList([1,3,4]),createList([2,6])]));

// 13/Jan/2022
// Runtime: 138 ms, faster than 56.55% of JavaScript online submissions for Merge k Sorted Lists.
// Memory Usage: 44.1 MB, less than 55.33% of JavaScript online submissions for Merge k Sorted Lists.