from typing import *

def twoSum(nums: List[int], target: int) -> List[int]:
    hm = {}
    for i, num in enumerate(nums):
        diff = target - num
        if hm.get(diff) != None:
            return [hm[diff], i]
        else:
            hm[num] = i

# 23/Nov/2021
# Runtime: 60 ms, faster than 78.50% of Python3 online submissions for Two Sum.
# Memory Usage: 15.3 MB, less than 54.49% of Python3 online submissions for Two Sum.

print(twoSum([3,3], 6))
print(twoSum([3,2,4], 6))
print(twoSum([2,7,11,15], 9))
print(twoSum([0,4,3,0], 0))

''' Memory Efficient 
def twoSum(nums: List[int], target: int) -> List[int]:
    for i, num in enumerate(nums):
        diff = target-num
        if diff in nums[i+1:]:
            return [i, nums[i+1:].index(diff)+(i+1)]

# 22/Nov/2021
# Runtime: 580 ms, faster than 38.39% of Python3 online submissions for Two Sum.
# Memory Usage: 14.7 MB, less than 92.37% of Python3 online submissions for Two Sum.
'''


