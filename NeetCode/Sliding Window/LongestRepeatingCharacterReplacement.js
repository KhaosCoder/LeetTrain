/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0, right = 0;
    let longest = 0;
    let freqs = new Map();
    let maxFreq = 0;
    while (right < s.length) { // ABAB
        freqs.set(s[right], (freqs.get(s[right]) ?? 0) + 1);
        maxFreq = Math.max(maxFreq, freqs.get(s[right]));
        let isValid = ((right-left+1) - maxFreq) <= k;
        if (isValid) {
            longest = Math.max(longest, (right-left+1));
        } else {
            freqs.set(s[left], freqs.get(s[left]) - 1);
            left++;
        }
        right++;
    }
    return longest;
};

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("ABBB", 2)); // 4

// April 28, 2022
// Runtime: 182 ms, faster than 29.07% of JavaScript online submissions for Longest Repeating Character Replacement.
// Memory Usage: 48.7 MB, less than 16.67% of JavaScript online submissions for Longest Repeating Character Replacement.

// April 28, 2022 => Keep track max freq instead of calculating each time
// Runtime: 84 ms, faster than 85.85% of JavaScript online submissions for Longest Repeating Character Replacement.
// Memory Usage: 43.2 MB, less than 43.72% of JavaScript online submissions for Longest Repeating Character Replacement.