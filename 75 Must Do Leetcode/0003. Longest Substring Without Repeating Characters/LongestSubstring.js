var lengthOfLongestSubstring = function(s) {
    var l=0, r=0, max_len=0, chars = new Set();
    while (r < s.length) { 
        if (!chars.has(s[r])) {
            max_len = Math.max(r-l+1, max_len);
        } else {
            while (chars.has(s[r])) {
                chars.delete(s[l]);
                l++;
            }
        }
        chars.add(s[r]);
        r++;
    }
    return max_len;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

// 23/Nov/2021
// Runtime: 147 ms, faster than 42.93% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 43.1 MB, less than 80.76% of JavaScript online submissions for Longest Substring Without Repeating Characters.