/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let [h,w] = [matrix.length,matrix[0].length];
    let zeros = [];
    for (let i=0;i<h;i++) {
        for (let j=0;j<w;j++) {
            if (matrix[i][j] == 0)
                zeros.push([i,j]);
        }
    }
    // for (let coords of zeros) {
    //     for (let i=0;i<h;i++) {
    //         for (let j=0;j<w;j++) {
    //             if (coords[0] == i || coords[1] == j)
    //                 matrix[i][j] = 0;
    //         }
    //     }
    // }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (zeros.some(c => c[0] == i) || zeros.some(c => c[1] == j))
                matrix[i][j] = 0;
        }
    }

    for (let row of matrix)
        console.log(row);
};

setZeroes([[1,1,1],[1,0,1],[1,1,1]]);

// 16/Jan/2022
// Runtime: 96 ms, faster than 76.50% of JavaScript online submissions for Set Matrix Zeroes.
// Memory Usage: 41.7 MB, less than 23.32% of JavaScript online submissions for Set Matrix Zeroes.