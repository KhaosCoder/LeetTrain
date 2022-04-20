/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false;
    
    let anagram = new Map();
    for (let char of s) {
        if (!anagram.has(char))
            anagram.set(char,0);
        anagram.set(char, anagram.get(char)+1);
    }

    for (let char of t) {
        if (!anagram.has(char))
            return false;
        anagram.set(char, anagram.get(char)-1);
        if (anagram.get(char) < 0)
            return false; 
    }
    return true;
};

// Space O(N)
// Time O(N)

// April 20, 2022
// Runtime: 108 ms, faster than 52.69% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 44.4 MB, less than 47.45% of JavaScript online submissions for Valid Anagram.