const isValid = (s) => {
    let pairs = {};
    pairs[')'] = '(';
    pairs['}'] = '{';
    pairs[']'] = '[';
    let stack = [];
    for (let p of s) {
        if (isOpening(p))
            stack.push(p);
        else {
            let tail = stack.pop();
            if (tail != pairs[p])
                return false;
        }
    }
    return stack.length === 0;
}

const isOpening = (p) => ['(', '[', '{'].includes(p);

console.log(isValid("(][)"));
console.log(isValid("())"));
console.log(isValid("(())"));
console.log(isValid("([{}])"));

// May, 28, 2022
// Runtime: 76 ms, faster than 61.53% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 43.8 MB, less than 12.27% of JavaScript online submissions for Valid Parentheses.

// n -> string length
// Space -> O(n) Time -> O(n)