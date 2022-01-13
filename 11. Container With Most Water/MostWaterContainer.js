/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [max_a,lp,rp] = [0,0,height.length-1];
    while (lp < rp) {
        let small = Math.min(height[lp], height[rp]);
        let a = small*(rp-lp);
        max_a = Math.max(max_a,a);
        if (height[lp] > height[rp])
            rp--
        else lp++;
    }
    return max_a;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([2,3,10,5,7,8,9]));

// 16/Dic/2021
// Runtime: 76 ms, faster than 97.86% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 48.6 MB, less than 8.65% of JavaScript online submissions for Container With Most Water.