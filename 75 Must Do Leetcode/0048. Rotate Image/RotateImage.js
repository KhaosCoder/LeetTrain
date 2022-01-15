/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// var rotate = function(matrix) {
//     var dup = JSON.parse(JSON.stringify(matrix));
//     let len = matrix[0].length;
//     let [h,w] = [0, len-1];

//     for (let r = 0; r < len; r++) {
//         for (let c = 0; c < len; c++) {
//             matrix[r][c] = dup[w][h];
//             w--;
//         }
//         h++;
//         w = len-1;
//     }

//     for (let row of matrix)
//         console.log(row);
// };

// 14/Jan/2022
// Runtime: 117 ms, faster than 15.01% of JavaScript online submissions for Rotate Image.
// Memory Usage: 38.9 MB, less than 63.04% of JavaScript online submissions for Rotate Image.

var rotate = function(matrix) {
    let [cl,cr] = [0, matrix[0].length - 1];
    while (cl < cr) {
        for (let i=0; i < (cr-cl); i++) {
            let [top,bot] = [cl,cr];
            let temp = matrix[top][cl + i];
            matrix[top][cl + i] = matrix[bot - i][cl];
            matrix[bot - i][cl] = matrix[bot][cr - i];
            matrix[bot][cr - i] = matrix[top + i][cr];
            matrix[top + i][cr] = temp;
        }
        cl++;
        cr--;
    }
    for (let row of matrix)
        console.log(row);
}

// 14/Jan/2022
// Runtime: 102 ms, faster than 26.03% of JavaScript online submissions for Rotate Image.
// Memory Usage: 39.6 MB, less than 25.47% of JavaScript online submissions for Rotate Image.

rotate([[1,2,3],[4,5,6],[7,8,9]]);
console.log("===============");
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);
