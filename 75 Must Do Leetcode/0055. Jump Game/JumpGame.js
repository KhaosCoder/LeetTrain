/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let end = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= end) 
            end = i;
    }
    
    return end == 0;
};

console.log(canJump([2,3,1,1,4])); // True
console.log(canJump([3,2,1,0,4])); // False
console.log(canJump([0,1])); // False

// 15/Jan/2022
// Runtime: 136 ms, faster than 45.33% of JavaScript online submissions for Jump Game.
// Memory Usage: 42.6 MB, less than 93.48% of JavaScript online submissions for Jump Game.