# Definition for singly-linked list.
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        left, right = dummy, head
        
        while n > 0 and right:
            right = right.next
            n-=1
            
        while right:
            right = right.next
            left = left.next
        
        left.next = left.next.next
        
        return dummy.next
    
    def createList(self, arr) -> Optional[ListNode]:
        list = ListNode(arr[0])
        node = list
        for i in range(1,len(arr)):
            node.next = ListNode(arr[i])
            node = node.next
        return list
    
    def printList(self, list):
        arr = [list.val]
        while list.next:
            arr.append(list.next.val)
            list = list.next
        print(arr)

s = Solution()
res = s.removeNthFromEnd(s.createList([1,2,3,4,5]), 2)
s.printList(res)