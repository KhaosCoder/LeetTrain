/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let dicc = new Map();
    for (let s of strs) {
        let temp = s.split("").sort().join("");
        dicc.has(temp) ? 
            dicc.get(temp).push(s) 
            : dicc.set(temp, [s]);
    }
    
    return Array.from(dicc.values());
};

// 15/Jan/2022
// Runtime: 124 ms, faster than 91.30% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 48.7 MB, less than 92.20% of JavaScript online submissions for Group Anagrams.

for (var res of groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
    console.log(res);