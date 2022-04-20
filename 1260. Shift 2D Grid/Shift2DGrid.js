/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    let height = grid.length;
    let width = grid[0].length;
    let arr = Array(height*width);
    for (let row =0; row<height; row++) {
        for (let col =0; col<width; col++) {
            arr[(row*width+col+k)%(arr.length)] = grid[row][col];
        }
    }
    let i = 0;
    for (let row =0; row<height; row++) {
        for (let col =0; col<width; col++) {
            grid[row][col] = arr[i];
            i++;
        }
    }
    console.log(grid);
    return grid;
};

shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1); 

// April 11, 2022
// Runtime: 102 ms, faster than 75.95% of JavaScript online submissions for Shift 2D Grid.
// Memory Usage: 47.1 MB, less than 84.81% of JavaScript online submissions for Shift 2D Grid.