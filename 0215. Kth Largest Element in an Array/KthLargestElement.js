/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// time O(nlogn) space O(1) 
var findKthLargest = function(nums, k) {
    nums.sort((a,b) => b-a); // O(nlogn)
    return nums[k-1]; // O(1)
};

// March 3
// Runtime: 83 ms, faster than 80.66% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 44.1 MB, less than 33.69% of JavaScript online submissions for Kth Largest Element in an Array.

console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));