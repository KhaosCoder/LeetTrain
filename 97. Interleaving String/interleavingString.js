var isInterleave = function (s1, s2, s3) {
    if ((s1.length + s2.length) !== s3.length)
        return false;
    let combinationGrid = Array(s1.length+1).fill(null).map(_ => Array(s2.length+1).fill(false))
    combinationGrid[s1.length][s2.length] = true;

    for (let i = s1.length; i>=0; i--) {
        for (let j = s2.length; j>=0; j--) {
            if (i < s1.length && s1[i] === s3[i+j] && combinationGrid[i+1][j])
                combinationGrid[i][j] = true;
            if (j < s2.length && s2[j] === s3[i+j] && combinationGrid[i][j+1])
                combinationGrid[i][j] = true;
        }
    }
    
    return combinationGrid[0][0];
};

// March 3
// Runtime: 118 ms, faster than 45.27% of JavaScript online submissions for Interleaving String.
// Memory Usage: 45 MB, less than 45.27% of JavaScript online submissions for Interleaving String.

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); // true
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")); // false
console.log(isInterleave("aabc", "abad", "aabadabc")); // true