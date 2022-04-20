/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var populateMap = (map, l) => {
    if (map.hasOwnProperty(l))
        map[l]++;
    else map[l] = 1;
}

var minWindow = function (s, t) {
    if (t == "") return "";
    if (s == t) return t;
    let [window, origin] = [{}, {}];

    for (let l of t)
        populateMap(origin, l);

    let [have, need] = [0, Object.keys(origin).length];
    let [left, reslen, res] = [0, Infinity, []];

    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        populateMap(window, c);
        if (origin.hasOwnProperty(c) && origin[c] == window[c])
            have++;

        while (have == need) {
            // update res
            if ((right - left + 1) < reslen) {
                res = [left, right];
                reslen = (right - left + 1);
            }
            // Remove left
            let cl = s[left];
            window[cl]--;
            if (origin.hasOwnProperty(cl) && origin[cl] > window[cl])
                have--;
            left++;
        }
    }
    let [a, b] = res;
    return s.slice(a, b + 1);
};

// 18/Jan/2022
// Runtime: 163 ms, faster than 54.78% of TypeScript online submissions for Minimum Window Substring.
// Memory Usage: 42.1 MB, less than 78.34% of TypeScript online submissions for Minimum Window Substring.

// console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("bbaa", "aba"));
// console.log(minWindow("a", "aa"));