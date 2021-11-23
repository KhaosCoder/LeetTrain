from typing import *

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, num in enumerate(nums):
            diff = target-num
            if diff in nums[i+1:]:
                return [i, nums[i+1:].index(diff)+(i+1)]

s = Solution()
print(s.twoSum([3,3], 6))
print(s.twoSum([3,2,4], 6))
print(s.twoSum([2,7,11,15], 9))

# 22/Nov/2021
# Runtime: 580 ms, faster than 38.39% of Python3 online submissions for Two Sum.
# Memory Usage: 14.7 MB, less than 92.37% of Python3 online submissions for Two Sum.
