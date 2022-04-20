// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function (strs) {
//     if (strs.length === 1)
//         return [strs];
//     let indices = new Set();
//     let groups = [];
//     let grpIdx = 0;
//     // O(N^3)
//     for (let i = 0; i < strs.length; i++) {
//         if (indices.has(i))
//                 continue;
//         let str1 = strs[i];
//         let hasPal = false;
//         for (let j = i + 1; j < strs.length; j++) {
//             if (indices.has(j))
//                 continue;
//             let str2 = strs[j];
//             if (isAnagram(str1, str2)) {
//                 if (!indices.has(i)) {
//                     hasPal = true;
//                     indices.add(i);
//                     groups.push([]);
//                     groups[grpIdx].push(str1);
//                 }
//                 indices.add(j);
//                 groups[grpIdx].push(str2);
//             }
//         }
//         if (!hasPal) 
//             groups.push([str1]);
//         grpIdx++;
//     }
    
//     return groups;
// };

// const isAnagram = (str1, str2) => {
//     if (str1.length !== str2.length)
//         return false;
//     let counts = new Map();
//     for (let char of str1) {
//         if (!counts.has(char)) { 
//             counts.set(char, 0);
//         }
//         counts.set(char, counts.get(char)+1);
//     }
//     for (let char of str2) {
//         if (!counts.has(char))
//             return false;
//         counts.set(char, counts.get(char)-1);
//         if (counts.get(char) < 0)
//             return false; 
//     }
//     console.log(str1, str2);
//     return true;
// }

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams(["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]));

// // BRUTE FORCE
// // April 20, 2022
// // Runtime: 4944 ms, faster than 5.01% of JavaScript online submissions for Group Anagrams.
// // Memory Usage: 51.7 MB, less than 98.49% of JavaScript online submissions for Group Anagrams.

// var groupAnagrams = function (strs) {
//     var sorted = [...strs];
//     sorted = sorted.map(s => s.split('').sort().join('')); // split & join O(str.length)
//     let result = [];

//     let dups = {};
//     for (let i = 0; i<strs.length; i++) {
//         let pal = sorted[i];
//         if (pal in dups) {
//             dups[pal].push(i);
//         } else dups[pal] = [i];
//     }

//     for (let key in dups) {
//         result.push(dups[key].map(i => strs[i]));
//     }

//     return result;
// };

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams(["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]));

// // Time O(n*k*logk) // k being str length
// // Space O(N)

// // Optimized sort
// // April 20, 2022
// // Runtime: 132 ms, faster than 82.20% of JavaScript online submissions for Group Anagrams.
// // Memory Usage: 54.2 MB, less than 36.22% of JavaScript online submissions for Group Anagrams.

var groupAnagrams = function (strs) { 
    let result = new Map();

    for (let word of strs) {
        let count = Array(26).fill(0);
        for (let char of word) {
            count[getASCII(char) - getASCII("a")]++;
        }
        let key = count.join(",");
        if (!result.has(key))
            result.set(key, []);
        result.get(key).push(word);
    }
    return Array.from(result.values());
};

const getASCII = (c) => c.charCodeAt(0); 
// MOST OPTIMAL

// Space O(N)
// Time O(26*N*K)

// April 20, 2022
// Runtime: 96 ms, faster than 99.62% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 54.4 MB, less than 34.09% of JavaScript online submissions for Group Anagrams.

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]));
console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]));