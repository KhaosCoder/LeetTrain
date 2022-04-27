/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//     if (nums.length === 0)
//         return 0;
//     let count = 1;
//     let maxSoFar = 1;
//     // O(n*logn)
//     nums.sort((a,b) => a-b);
//     // O(n)
//     for (let i = 1; i< nums.length; i++) {
//         let num = nums[i];
//         let prev = nums[i-1];
//         if ((prev+1) === num)
//             count++;
//         else if (prev !== num) count = 1;
//         maxSoFar = Math.max(maxSoFar, count);
//     }
//     return maxSoFar;
// };
// O(nlogn) NOT Optimal
// April 26, 2022
// Runtime: 120 ms, faster than 73.95% of JavaScript online submissions for Longest Consecutive Sequence.
// Memory Usage: 48 MB, less than 94.43% of JavaScript online submissions for Longest Consecutive Sequence.

// console.log(longestConsecutive([100,4,200,1,3,2]));
// console.log(longestConsecutive([1,2,0,1]));

var longestConsecutive = function (nums) {
    let numSet = new Set(nums); //O(N)

    let max = 0;
    for (let num of nums) { // O(N)
        if (!numSet.has(num-1)) {
            let count = 0;
            while (numSet.has(num+count)) {
                count++
            }
            max = Math.max(count, max);
        }
    }
    return max;
};

console.log(longestConsecutive([0,-3,7,2,5,8,4,6,0,1])); // 5
console.log(longestConsecutive([100,4,200,1,3,2])); // 4
console.log(longestConsecutive([1,2,0,1])); // 3
console.log(longestConsecutive([])); // 0
console.log(longestConsecutive([0])); // 1

// O(N) ??
// Runtime: 576 ms, faster than 24.90% of JavaScript online submissions for Longest Consecutive Sequence.
// Memory Usage: 50.1 MB, less than 77.08% of JavaScript online submissions for Longest Consecutive Sequence.