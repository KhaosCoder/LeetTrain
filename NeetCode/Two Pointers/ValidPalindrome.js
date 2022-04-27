// a.replace(/[^a-z0-9]/gi,'');
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphanumeric = s.replace(/[^a-z0-9]/gi,'').toLowerCase(); // O(N)
    // g: global, i: insensitive [a-z] === [a-zA-Z]
    
    let left =0, right = alphanumeric.length-1;
    while (left <= right) { // O(N)
        if (alphanumeric[left] !== alphanumeric[right]) 
            return false;
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("race Car"));
console.log(isPalindrome("ab_a"));

// April 27, 2022
// Runtime: 85 ms, faster than 68.75% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 44.4 MB, less than 80.23% of JavaScript online submissions for Valid Palindrome.