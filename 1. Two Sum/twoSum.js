function twoSum(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        var sec = target - nums[i];
        
        if (nums.lastIndexOf(sec) > i)
            return [i, nums.lastIndexOf(sec)];
    }
};

console.log(twoSum([3,3], 6))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([2,7,11,15], 9))

// 22/Nov/2021
// Runtime: 836 ms, faster than 5.00% of JavaScript online submissions for Two Sum.
// Memory Usage: 39.2 MB, less than 94.12% of JavaScript online submissions for Two Sum.