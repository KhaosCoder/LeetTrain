/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length)
        return false; 
    let chars = Array(26).fill(0);
    let chars2 = Array(26).fill(0);
    for (let c of s1) {
        chars[getCharIdx(c)]++;
    }
    let keyStr = chars.join(',');
    for (let i=0; i<s1.length;i++) { 
        chars2[getCharIdx(s2[i])]++;
    }
    let [l,r] = [0, s1.length-1]
    while (r < s2.length) {
        if (s1.includes(s2[l]) && keyStr === chars2.join(','))
            return true;
        if (r === s2.length-1)
            return false;
        chars2[getCharIdx(s2[l++])]--;
        chars2[getCharIdx(s2[++r])]++;
    }
    return false;
};

const getCharIdx = (c) => c.charCodeAt(0) - "a".charCodeAt(0);

console.log(checkInclusion("ab", "eidbaooo")); // True
console.log(checkInclusion("aba", "eidbaooo")); // False
console.log(checkInclusion("ab", "eidboaoo")); // False
console.log(checkInclusion("adc", "dcda")); // True

// April 28, 2022 O(26*n)
// Runtime: 122 ms, faster than 66.31% of JavaScript online submissions for Permutation in String.
// Memory Usage: 50.8 MB, less than 15.30% of JavaScript online submissions for Permutation in String.