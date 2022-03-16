/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
    //Make sure all the letters on on the board || HUGE runtime improvement
    for(let c of word){
        if(!board.reduce((prev,curr) => prev || curr.includes(c),false)){
            return false;
        } 
    }
    // Init
    let [ROWS, COLS] = [board.length, board[0].length];
    let steps = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == word[0] && dfs(i, j, 0))
                return true;
        }
    }
    // dfs path
    function dfs(r, c, i) {
        if (i == word.length)
            return true;
        if (r < 0 || c < 0 || c >= COLS || r >= ROWS || word[i] != board[r][c])
            return false;
        const temp = board[r][c];
        board[r][c] = '';
        let res = [];
        for (let [x, y] of steps)
            res.push(dfs(r + x, c + y, i + 1));
        board[r][c] = temp;
        return res.some(a => a);
    }

    return false;
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"));

// 19/Jan/2022
// Runtime: 223 ms, faster than 98.70% of JavaScript online submissions for Word Search.
// Memory Usage: 45.3 MB, less than 19.97% of JavaScript online submissions for Word Search.
