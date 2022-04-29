/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// t in => s
var minWindow = function (s, t) {
    if (!t) return "";

    let count = new Map();
    let window = new Map();
    for (let c of t) {
        count.set(c, (count.get(c) ?? 0) +1);
    }
    let need = count.size, has = 0;
    let [l,r] = [0,0];
    let minLen = Infinity, resStr = "";
    while (r < s.length) {
        let currChar = s[r];

        if (count.has(currChar)) {
            window.set(currChar, (window.get(currChar) ?? 0) + 1);
            if (window.get(currChar) === count.get(currChar)) {
                has++;
            }
        }

        while (need === has) {
            let currWindow = s.slice(l,r+1);
            if (currWindow.length < minLen) {
                minLen = currWindow.length;
                resStr = currWindow;
            }
            
            let start = s[l];
            if (count.has(start)) {
                window.set(start, window.get(start) - 1);
                if (window.get(start) < count.get(start)) {
                    has--;
                }
            }
            l++;
        }
        r++;
    }
    return resStr;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", ""));
console.log(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"));

// April 28, 2022
// Runtime: 90 ms, faster than 87.89% of JavaScript online submissions for Minimum Window Substring.
// Memory Usage: 45.9 MB, less than 54.93% of JavaScript online submissions for Minimum Window Substring.