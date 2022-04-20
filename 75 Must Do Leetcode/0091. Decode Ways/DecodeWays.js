
var valid = (c) => {
    if (parseInt(c) <= 26 && parseInt(c) > 0)
        return true;
    return false;
}
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let obj = { };
    let len = s.length;
    obj[len] = 1;

    function dfs(i) {
        if (obj.hasOwnProperty(i))
            return obj[i];
        if (s[i] == '0')
            return 0;
        let res = dfs(i+1);
        if (i < len-1 && valid(s.slice(i,i+2)))
            res += dfs(i+2);
        obj[i] = res;
        return res;
    }

    return dfs(0);
};

// 19/Jan/2022
// Runtime: 152 ms, faster than 21.07% of JavaScript online submissions for Decode Ways.
// Memory Usage: 39.8 MB, less than 86.76% of JavaScript online submissions for Decode Ways.

console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("11106"));
console.log(numDecodings("0"));