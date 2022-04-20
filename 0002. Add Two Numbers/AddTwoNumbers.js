
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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let res = null;
    let carry = 0;
    while (l1 && l2) {
        let currentValue = l1.val + l2.val + carry;
        carry = 0;
        if (currentValue > 9) {
            carry = 1;
            currentValue = currentValue % 10;
        }
        //console.log(currentValue);
        res = new ListNode(currentValue, res);
        // res = res.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if (carry === 1 && (!l1 && !l2)) res = new ListNode(1, res);

    if (l1)
        res = restCarry(res, l1, carry);
    if (l2)
        res = restCarry(res, l2, carry);

    

    return reverseLinkedList(res);
};

const reverseLinkedList = (list) => {
    let prev = null;
    let curr = list;
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    console.log(prev);
    return prev;
}

const restCarry = (res, list, carry) => {
    if (!list) {
        if (carry === 1) res = new ListNode(1, res);
        return res;
    }
    let currentValue = list.val + carry;
    carry = 0;
    if (currentValue > 9) {
        carry = 1;
        currentValue = currentValue % 10;
    }
    res = new ListNode(currentValue, res);
    return restCarry(res, list.next, carry);
}

let l1 = createList([5]), l2 = createList([5]); // 7,0,8
let l3 = createList([9, 9, 9, 9, 9, 9, 9]), l4 = createList([9, 9, 9, 9]); // 8,9,9,9,0,0,0,1

addTwoNumbers(l1, l2);
// addTwoNumbers(l3,l4);

// April 12, 2022
// Runtime: 109 ms, faster than 83.21% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 48.4 MB, less than 15.49% of JavaScript online submissions for Add Two Numbers.