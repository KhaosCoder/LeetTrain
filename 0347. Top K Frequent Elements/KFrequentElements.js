/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let freqHash = {};
    let freqArray = Array(nums.length+1).fill(null).map(_ => Array());
    for (let num of nums) { // O(n)
        if (!freqHash.hasOwnProperty(num)) freqHash[num] = 0;
        freqHash[num]++;
    }
    for (let num in freqHash) { // O(m), m=> unique values
        freqArray[freqHash[num]].push(parseInt(num));
    }
    let res = [];
    for (let i = freqArray.length-1; i>=0; i--) {
        let freqList = freqArray[i];
        for (let freq of freqList) {
            res.push(freq);
            if (res.length === k)
                return res;
        }
    }
    return res;
};

// Mar 4
// Runtime: 123 ms, faster than 44.38% of JavaScript online submissions for Top K Frequent Elements.
// Memory Usage: 52.6 MB, less than 51.55% of JavaScript online submissions for Top K Frequent Elements.