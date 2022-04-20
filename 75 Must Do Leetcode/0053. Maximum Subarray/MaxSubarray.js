/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum=nums[0], max_sum=nums[0];
    for (var i=1;i<nums.length;i++) {
        sum=Math.max(sum+nums[i],nums[i]);
        max_sum=Math.max(sum,max_sum);
    }
    return max_sum;
};

// 2/Nov/2021
// Runtime: 92 ms, faster than 88.92% of TypeScript online submissions for Group Anagrams.
// Memory Usage: 49.2 MB, less than 75.36% of TypeScript online submissions for Group Anagrams.

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([5,4,-1,7,8]));