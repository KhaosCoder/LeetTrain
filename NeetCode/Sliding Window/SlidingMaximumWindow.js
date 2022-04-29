/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let maxArr = [];
    let dequeIdcs = [];

    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        let left = i - k + 1;
        while (currNum > nums[dequeIdcs[dequeIdcs.length-1]]) {
            dequeIdcs.pop();
        }
        dequeIdcs.push(i);
        if (left > dequeIdcs[0]) {
            dequeIdcs.shift();
        }
        if (i >= k-1)
            maxArr.push(nums[dequeIdcs[0]]);
    }
    return maxArr;
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([9,10,9,-7,-4,-8,2,-6], 5)); // [10,10,9,2]

// Most optimal, ST O(N)
// April 28, 2022
// Runtime: 1060 ms, faster than 28.28% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 85.2 MB, less than 35.08% of JavaScript online submissions for Sliding Window Maximum.