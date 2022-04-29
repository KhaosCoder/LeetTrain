/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let unique = new Set();
    let left = 0, right = 0;
    let longest = 0;
    while (right < s.length) {
        if (unique.has(s[right])) {
            longest = Math.max(unique.size, longest);
            while (unique.has(s[right])) {
                unique.delete(s[left]);
                left++;
            }
        } else {
            unique.add(s[right]);
            longest = Math.max(unique.size, longest);
            right++;
        }
        if (left > right) right = left+1;
    }

    return longest;
};

console.log(lengthOfLongestSubstring("abcabcabc"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("au"));

// April 28, 2022
// Runtime: 95 ms, faster than 85.35% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 47.1 MB, less than 69.92% of JavaScript online submissions for Longest Substring Without Repeating Characters.