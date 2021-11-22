function twoSum(nums, target) {
    if (nums.length == 2) return [0,1]
    for(var i = 0; i < nums.length; i++) {
        var sec = target - nums[i];
        
        if (nums.lastIndexOf(sec) > i)
            return [i, nums.lastIndexOf(sec)];
    }
};

console.log(twoSum([2,7,11,15], 9))