//1970 John Conway
// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let cols = board[0].length;
    let rows = board.length;
    let boardCopy = board.map(row => [...row]);

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let liveNeighs = liveNeighborSum(r,c, boardCopy);
            if (liveNeighs === 3)
                board[r][c] = 1;
            if (board[r][c] === 1 && liveNeighs === 2)
                board[r][c] = 1;
            if (liveNeighs < 2 || liveNeighs > 3)
                board[r][c] = 0;
        }
    }
    console.log(board);
};

const liveNeighborSum = (r, c, board) => {
    let sum = 0;
    let cols = board[0].length;
    let rows = board.length;
    let steps = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, -1], [-1, 1], [1, 1], [-1, -1]];
    for (let [x,y] of steps) {
        let rx = r+x, cy = c+y;
        if (isInBounds(rx,cy,rows,cols))
            sum += board[rx][cy];
    }
    return sum;
}

const isInBounds = (r, c, rows, cols) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols)
        return false;
    return true;
}

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);

// ST O(N*M) in one For loop
// April 27, 2022
// Runtime: 67 ms, faster than 77.14% of JavaScript online submissions for Game of Life.
// Memory Usage: 44.3 MB, less than 11.72% of JavaScript online submissions for Game of Life.