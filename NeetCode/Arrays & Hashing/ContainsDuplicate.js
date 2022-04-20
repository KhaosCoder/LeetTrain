/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let duplicates = new Set();
    for (let num of nums) {
        if (duplicates.has(num))
            return true;
        duplicates.add(num);
    }
    return false;
};

// Space O(N)
// Time O(N)

// April 20, 2022
// Runtime: 71 ms, faster than 99.08% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 51.2 MB, less than 41.90% of JavaScript online submissions for Contains Duplicate.