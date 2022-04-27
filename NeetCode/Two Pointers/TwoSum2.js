/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // CONSTANT SPACE => no hashmap
    let left =0, right = numbers.length -1;
    let sum = -Infinity;
    while (sum != target && ( left < right)) {
        sum = numbers[left] + numbers[right];
        if (sum > target)
            right--;
        if (sum < target)
            left++;
    }
    return [left+1,right+1];
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,3,4],6));

// April 27, 2022
// Runtime: 76 ms, faster than 65.76% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
// Memory Usage: 43.3 MB, less than 24.63% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.