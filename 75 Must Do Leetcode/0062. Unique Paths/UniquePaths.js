/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let row = Array(n).fill(1);

    for (let i =0; i<m-1;i++) {
        let newRow = Array(n).fill(1);
        for (let j=n-2; j >= 0; j--) {
            newRow[j] = newRow[j+1] + row[j];
        }
        row = newRow;
    }

    return row[0];
};

console.log(uniquePaths(3,7));

// 16/Jan/2022
// Runtime: 68 ms, faster than 94.37% of JavaScript online submissions for Unique Paths.
// Memory Usage: 38.6 MB, less than 84.01% of JavaScript online submissions for Unique Paths.