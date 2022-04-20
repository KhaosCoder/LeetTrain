/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let complements = {};
    for (let i =0; i<nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        if (complement in complements)
            return [complements[complement], i];
        complements[num] = i;
    }
};

// April 20, 2022
// Runtime: 93 ms, faster than 67.26% of JavaScript online submissions for Two Sum.
// Memory Usage: 41.9 MB, less than 96.57% of JavaScript online submissions for Two Sum.