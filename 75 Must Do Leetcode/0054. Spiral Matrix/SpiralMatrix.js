/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let [m, n] = [matrix.length, matrix[0].length];
    let [top, bot, left, right] = [0, m, 0, n];
    let res = [];

    while (res.length < (n * m)) {

        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i < bot; i++) {
            res.push(matrix[i][right - 1]);
        }
        right--;

        if (!(left < right && top < bot))
            break;

        for (let i = right - 1; i > left - 1; i--) {
            res.push(matrix[bot - 1][i]);
        }
        bot--;

        for (let i = bot - 1; i > top - 1; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }
    return res;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// 15/Jan/2022
// Runtime: 72 ms, faster than 75.30% of JavaScript online submissions for Spiral Matrix.
// Memory Usage: 38.9 MB, less than 20.10% of JavaScript online submissions for Spiral Matrix.