var evalRPN = function (tokens) {
    let stack = [];
    let operators = new Set(['+', '-', '/', '*']);
    for (let t of tokens) {
        if (!operators.has(t)) {
            stack.push(parseInt(t));
            continue;
        }

        let second = stack.pop();
        let first = stack.pop();

        if (t === '/') {
            stack.push(Math.trunc(first / second));
        } else if (t === '*') {
            stack.push(first * second);
        } else if (t === '+') {
            stack.push(first + second);
        } else if (t === '-') {
            stack.push(first - second);
        }
    }
    //console.log(stack);
    return stack[0];
}

// console.log(evalRPN(["2","1","+","3","*"])); // 9
// console.log(evalRPN(["4","13","5","/","+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22

// May, 28, 2022
// Runtime: 86 ms, faster than 67.05% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// Memory Usage: 44.8 MB, less than 71.51% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// Space O(n), Time O(n)

// ((10 * (6 / ((9 + 3) * -11))) + 17) + 5

/**
 * 10
 * 10, 6
 * 10, 6, 9
 * 10, 6, 9, 3
 * +
 * 10, 6, 12, -11
 * *
 * 10, 6, -132
 * /
 * 10, 0
 * *
 * 0, 17
 * +
 * 17, 5
 * +
 * 22
*/