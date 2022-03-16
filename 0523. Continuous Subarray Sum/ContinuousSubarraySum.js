/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let modHash = {0: -1};
    let totalSum = 0;
    for (let i=0; i<nums.length; i++) {
        totalSum += nums[i];
        let mod = totalSum % k;
        if (!(mod in modHash)) {
            modHash[mod] = i;
        } else if (i-modHash[mod] > 1) {
            return true;
        }
        
    }
    return false;
};

// Mar 8 2022
// Runtime: 124 ms, faster than 73.88% of JavaScript online submissions for Continuous Subarray Sum.
// Memory Usage: 63.7 MB, less than 11.11% of JavaScript online submissions for Continuous Subarray Sum.

console.log(checkSubarraySum([23,2,4,6,7], 6)); // true
console.log(checkSubarraySum([23,2,6,4,7], 13)); // false
console.log(checkSubarraySum([5,0,0,0], 3)); // true