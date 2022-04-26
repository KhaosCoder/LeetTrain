/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//     let answer = [];
//     let prefix = Array(nums.length);
//     let postfix = Array(nums.length);

//     for (let i = 0; i<nums.length; i++ ) {
//         prefix[i] = nums[i] * (i > 0 ? prefix[i-1] : 1);
//     }
//     for (let i = nums.length-1; i>=0; i-- ) {
//         postfix[i] = nums[i] * (i < nums.length -1 ? postfix[i+1] : 1);
//     }
//     for (let i = 0; i<nums.length; i++ ) {
//         answer[i] = (i < nums.length -1 ? postfix[i+1] : 1) * (i > 0 ? prefix[i-1] : 1);
//     }
//     return answer;
// };

// April 20, 2022
// Runtime: 158 ms, faster than 36.03% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 59.2 MB, less than 5.23% of JavaScript online submissions for Product of Array Except Self.

// console.log(productExceptSelf([1,2,3,4]));

var productExceptSelf = function (nums) {
    let answer = Array(nums.length).fill(1);
    let prefix = 1;
    // O(N)
    for (let i = 0; i<nums.length; i++ ) {
        answer[i] = prefix;
        prefix *= nums[i];
    }
    let postfix = 1;
    // O(N)
    for (let i = nums.length-1; i>=0; i-- ) {
        answer[i] *= postfix;
        postfix *= nums[i];
    }
    
    return answer;
};
// Optimized
// Space O(N)
// Time O(N)
// April 20, 2022
// Runtime: 134 ms, faster than 57.72% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 53.1 MB, less than 87.10% of JavaScript online submissions for Product of Array Except Self.

console.log(productExceptSelf([1,2,3,4]));
