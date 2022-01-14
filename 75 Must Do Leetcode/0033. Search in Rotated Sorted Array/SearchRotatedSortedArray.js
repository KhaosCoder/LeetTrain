/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var i = 0;
    for (n of nums) {
        if (n == target) return i;
        i++;
    }
    return -1;
};

// 13/Jan/2022
// Runtime: 76 ms, faster than 74.60% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 40.1 MB, less than 37.67% of JavaScript online submissions for Search in Rotated Sorted Array.