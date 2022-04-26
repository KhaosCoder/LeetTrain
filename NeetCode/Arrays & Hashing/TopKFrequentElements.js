/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freqs = Array(nums.length + 1).fill(null).map(x => Array());
    let counts = {};
    // O(N)
    for (let num of nums) {
        if (!(num in counts))
            counts[num] = 0;
        counts[num]++;
    }
    // O(N)
    for (let key in counts) {
        freqs[counts[key]].push(key);
    }
    let result = [];
    // O (N) // when k === n
    for (let i = freqs.length - 1; i >= 0; i--) {
        let values = freqs[i];
        for (let val of values) {
            result.push(val);
            k--;
            if (k === 0)
                return result;
        }
    }
    return [];
};
// April 20, 2022
// Runtime: 145 ms, faster than 18.30% of JavaScript online submissions for Top K Frequent Elements.
// Memory Usage: 53.9 MB, less than 5.09% of JavaScript online submissions for Top K Frequent Elements.

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));