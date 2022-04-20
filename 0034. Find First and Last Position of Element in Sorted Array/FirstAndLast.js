/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // if (nums.length === 0)
    //     return [-1, -1];
    let left = 0, right = nums.length - 1;
    let res = [-1, -1];
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) {
            left = mid+1;
        }
        else if (target < nums[mid]) {
            right = mid-1;
        } else {
            let idx1 = mid, idx2 = mid;
            while (nums[idx1] === target && idx1 >= 0) {
                idx1--;
            }
            while (nums[idx2] === target && idx2 < nums.length) {
                idx2++;
            }
            return [idx1 +1, idx2 - 1]
        }
    }

    return res;
};

console.log(searchRange([5,7,7,8,8,10],8));
console.log(searchRange([5,7,7,8,8,10],6));
console.log(searchRange([],0));

// Mar 17 
// Runtime: 71 ms, faster than 75.36% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 43.1 MB, less than 12.91% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.