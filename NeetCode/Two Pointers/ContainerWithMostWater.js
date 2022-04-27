/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length-1;
    let maxArea = -Infinity;
    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let area = minHeight * (right-left);
        maxArea = Math.max(maxArea, area);
        if (height[left] > height[right])
            right--;
        else left++;
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49

// April 27, 2022
// Runtime: 114 ms, faster than 37.74% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 49.8 MB, less than 37.86% of JavaScript online submissions for Container With Most Water.