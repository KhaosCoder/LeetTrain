/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b); // O(nlogn)

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i>0 && nums[i-1] === nums[i])
            continue;
        let left = i + 1, right = nums.length - 1;
        let sum = -Infinity;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum > 0)
                right--;
            else if (sum < 0)
                left++;
            else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                while (nums[left] === nums[left-1]) {
                    left++;
                }
            }
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1,0,1,0]));

// April 27, 2022
// Runtime: 211 ms, faster than 49.06% of JavaScript online submissions for 3Sum.
// Memory Usage: 52.5 MB, less than 74.80% of JavaScript online submissions for 3Sum.