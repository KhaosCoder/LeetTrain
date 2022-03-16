/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let [one, two] = [1,1];
    
    for (let i = 1; i<n; i++) {
        let temp = one;
        one+=two;
        two = temp;
    }
    
    return one;
};

// 15/Jan/2021
// Runtime: 83 ms, faster than 38.42% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 38.2 MB, less than 89.27% of JavaScript online submissions for Climbing Stairs.