/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = Array(9).fill(null).map(x => new Set());
    let cols = Array(9).fill(null).map(x => new Set());
    let subbox = Array(9).fill(null).map(x => new Set());

    for (let r =0; r<9; r++) {
        for (let c =0; c<9; c++) {
            let value = board[r][c];
            if (value === '.')
                continue;
            let box = getSubbox(r,c);
            if (rows[r].has(value) || cols[c].has(value) ||subbox[box].has(value))
                return false;
            rows[r].add(value);
            cols[c].add(value);
            subbox[box].add(value);
        }
    }
    return true;
};

const getSubbox = (r, c) => {
    let idx;
    if (r < 3) {
        idx = 0;
    }
    else if (r < 6) {
        idx = 3;
    } else if (r < 9)
        idx = 6;
    
    if (c < 3) {
        idx += 0;
    }
    else if (c < 6) {
        idx += 1;
    } else if (c < 9)
        idx += 2
        
    return idx;
}

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));
// OPTIMAL
// Space O(9)
// Time O(9*9) = O(81)
// April 20
// Runtime: 81 ms, faster than 83.97% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 45.9 MB, less than 47.05% of JavaScript online submissions for Valid Sudoku.