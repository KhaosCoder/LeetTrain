/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let [pal,l,r,len] = ["",0,0,s.length];
    for (let i=0; i<len; i++) {
        l=i, r=i;
        while (l >= 0 && r <= len && s[l] == s[r]) {
            if (r-l+1 > pal.length)
                pal = s.substring(l,r+1);
            l--;
            r++;
        }
        l=i, r=i+1;
        while (l >= 0 && r <= len && s[l] == s[r]) {
            if (r-l+1 > pal.length)
                pal = s.substring(l,r+1);
            l--;
            r++;
        }
    }
    return pal;
};

// 4/Dec/2021
// Runtime: 112 ms, faster than 71.68% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 40.5 MB, less than 96.51% of JavaScript online submissions for Longest Palindromic Substring.

console.log("0." + longestPalindrome("abbbb") + ` - "bbbb"`)
console.log("1." + longestPalindrome("babad") + ` - "bab" "aba"`)
console.log("2." + longestPalindrome("cbbd") + ` - "bb"`)
console.log("3." + longestPalindrome("a") + ` - "a"`)
console.log("4." + longestPalindrome("ac") + ` - "a" "c"`)
console.log("5." + longestPalindrome("abb") + ` - "bb"`)
console.log("6." + longestPalindrome("abbb") + ` - "bbb"`)
console.log("7." + longestPalindrome("aacabdkacaa") + ` - "aca"`)