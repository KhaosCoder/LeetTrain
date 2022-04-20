// Time O(nlogn) Space O(n)
var lengthOfLIS = function(nums) {
    let sequence = [nums[0]];

    for (let i = 1; i<nums.length; i++ ) { // O(n)
        let currentVal = nums[i];
        if (currentVal <= sequence[sequence.length-1]) {
            if (currentVal === sequence[sequence.length-1])
                continue;
            let replaceIdx = lowerOrEqual(currentVal, sequence);
            if (replaceIdx >= 0) sequence[replaceIdx] = currentVal;
        } else {
            sequence.push(currentVal);
        }
    }
    return sequence.length;
};
/**
 * If value is greater, PUSH
 * If value is smaller, binary search first lower or equal value and REPLACE
 */
const lowerOrEqual = (target, arr) => { // Binary Search -> O(logn)
    let l = 0, r = arr.length-1;
    while (l<=r) {
        let mid = Math.floor((l+r)/2);
        if (target < arr[mid]) {
            r = mid-1;   
        } else if (target > arr[mid]) {
            l = mid+1;
        } else {
            return mid;
        }
    }
    return l;
}

console.log(lengthOfLIS([3,5,6,2,5,4,19,5,6,7,12])); // 2, 4, 5, 6, 7, 12 => 6
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 2,5,7,101 => 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // 0,1,2,3 => 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // 7 => 1
console.log(lengthOfLIS([4,10,4,3,8,9])); // 3,8,9 => 3
console.log(lengthOfLIS([1,2,3,4,5])); // 1,2,3,4,5 => 5

// March 17
// Runtime: 68 ms, faster than 97.49% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 42.5 MB, less than 84.18% of JavaScript online submissions for Longest Increasing Subsequence.



