/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let sequence = [nums[0]];
    for (let i=1; i<nums.length;i++) { // O(n)
        let currNum = nums[i];
        let lastIdx = higherOrEqual(currNum, sequence); // O(m) m=> seq.len
        if (lastIdx >=0) {
            sequence[lastIdx] = currNum;
        } else sequence.push(currNum);
        if (sequence.length >= 3)
            return true;
    }

    return false;
};

const higherOrEqual = (val, arr) => {
    for (let i =0; i<arr.length; i++) {
        if (val <= arr[i])
            return i;
    }
    return -1;
}

console.log(increasingTriplet([1,2,3,4,5])); // true
console.log(increasingTriplet([5,4,3,2,1])); // false
console.log(increasingTriplet([2,1,5,0,4,6])); // true
console.log(increasingTriplet([1,5,0,4,1,3])); // true

// March 3 
// Runtime: 83 ms, faster than 84.27% of JavaScript online submissions for Increasing Triplet Subsequence.
// Memory Usage: 53.9 MB, less than 33.33% of JavaScript online submissions for Increasing Triplet Subsequence.