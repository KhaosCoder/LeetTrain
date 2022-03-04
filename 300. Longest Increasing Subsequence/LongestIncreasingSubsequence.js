// Time O(nlogn) Space O(n)
var lengthOfLIS = function(nums) {
    let sequence = [nums[0]];

    for (let i = 1; i<nums.length; i++ ) { // O(n)
        let currentVal = nums[i];
        let replaceIdx = higherOrEqual(currentVal, sequence);
        if (replaceIdx >= 0) { // O(logn)
            sequence[replaceIdx] = currentVal;
        } else sequence.push(currentVal);
    }

    return sequence.length;
};

const higherOrEqual = (target, arr) => {
    for (let i = 0; i<arr.length; i++) {
        if (target <= arr[i])
            return i;
    }
    return -1;
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 2,5,7,101 => 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // 0,1,2,3 => 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // 7 => 1
console.log(lengthOfLIS([4,10,4,3,8,9])); // 3,8,9 => 3
console.log(lengthOfLIS([1,2,3,4,5])); // 1,2,3,4,5 => 5

// March 3 
// Runtime: 91 ms, faster than 91.36% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 42.7 MB, less than 59.99% of JavaScript online submissions for Longest Increasing Subsequence.



