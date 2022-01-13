from typing import List

def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        
        for i,a in enumerate(nums):
            if i>0 and a == nums[i-1]:
                continue
            j,k = i+1, len(nums)-1
            while k>j:
                sum = a + nums[j] + nums[k]
                if sum > 0:
                    k-=1
                elif sum < 0:
                    j+=1
                else:
                    res.append([a,nums[j], nums[k]])
                    j+=1
                    while nums[j] == nums[j-1] and j<k:
                        j+=1
        return res

# 12/Jan/2022
# Runtime: 788 ms, faster than 83.36% of Python3 online submissions for 3Sum.
# Memory Usage: 17.4 MB, less than 87.05% of Python3 online submissions for 3Sum.