/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let prevs = new Map();
    const rec = (num) => {
        console.log(prevs);
        if (prevs.has(num))
            return prevs.get(num);
        if (num == 0 || num == 1)
            return num;
        let res = rec(num-1) + rec(num-2);
        prevs.set(num, res);
        return res;
    }
    return rec(n);
};

console.log(fib(50));

// 25/Jan/2022
// Runtime: 86 ms, faster than 60.25% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 38.2 MB, less than 79.42% of JavaScript online submissions for Fibonacci Number.