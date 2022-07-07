/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let types = new Set();
    for (let type of candyTypes) {
        types.add(type);
    }
    return Math.min(candyType.length/2, types.size);
};

// Mar 17 
// Runtime: 104 ms, faster than 99.17% of JavaScript online submissions for Distribute Candies.
// Memory Usage: 56.7 MB, less than 42.82% of JavaScript online submissions for Distribute Candies.