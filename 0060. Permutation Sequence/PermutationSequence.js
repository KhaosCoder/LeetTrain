/**
 * @param {nber} n
 * @param {nber} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let permutation = [];
    let digits = Array(n).fill(1).map((v,i) => i>0 ? v + i : v);;
    let factorials = Array(n+1).fill(1);
    for (let i = 1; i<=n; i++) {
        factorials[i] = i*factorials[i-1]
    }
    k--;
    while (n > 0) {
        let partitionLen = Math.floor(factorials[n]/n);
        let i = Math.floor(k/partitionLen);
        permutation.push(digits[i]);
        digits.splice(i,1);
        n--;
        k %= partitionLen;
    }
    return permutation.join('');
};

// Mar 10
// Runtime: 88 ms, faster than 73.04% of JavaScript online submissions for Permutation Sequence.
// Memory Usage: 42.1 MB, less than 80.00% of JavaScript online submissions for Permutation Sequence.

console.log(getPermutation(3,3)); // 213
console.log(getPermutation(4,9)); // 2314