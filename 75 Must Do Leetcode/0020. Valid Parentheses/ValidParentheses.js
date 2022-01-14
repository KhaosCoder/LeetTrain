/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var pairs = { "(" : ")", "{" : "}", "[" : "]" };
    let close = [")","]","}"];
    let read = [];

    let p=0;
    for (p of s) {
        if (close.indexOf(p) >= 0) {
            if (pairs[read.pop()] != p)
                return false;
        } else read.push(p);
    }
    if (read.length > 0) return false;
    return true;
};

console.log(isValid("()")); // true
console.log(isValid("(){}[]")); //true
console.log(isValid("(]")); // false
console.log(isValid("{[]}")); // true

// 12/Jan/2022
// Runtime: 72 ms, faster than 86.16% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 39.8 MB, less than 46.89% of JavaScript online submissions for Valid Parentheses.