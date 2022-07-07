/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let token of tokens) {
        let digit = parseInt(token);
        let isDigit = !isNaN(digit);
        if (isDigit) {
            stack.push(digit);
            continue;
        }
        let second = stack.pop();
        let first = stack.pop();
        let res = 0;
        if (token === '+')
            res = first + second;

        if (token === '/')
            res = Math.trunc(first / second);

        if (token === '-')
            res = first - second;

        if (token === '*')
            res = first * second;
        stack.push(res);
    }
    return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); //22

// S: O(n), T: O(n)
// 14 Jun, 2022
// Runtime: 89 ms, faster than 66.61% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// Memory Usage: 44.4 MB, less than 83.71% of JavaScript online submissions for Evaluate Reverse Polish Notation.