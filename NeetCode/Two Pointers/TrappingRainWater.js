// GOOGLE MOCK INTERVIEW

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0, right = height.length - 1;
    let maxLeft = height[left], maxRight = height[right];
    let totalWater = 0;

    while (left < right) {
        if (maxLeft > maxRight) {
            right--;
            maxRight = Math.max(maxRight, height[right]);
            totalWater += maxRight - height[right];
        }
        else {
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            totalWater += maxLeft - height[left];
        }
    }

    return totalWater;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9

// Time O(n) - Space O(1)
// April 27, 2022
// Runtime: 110 ms, faster than 28.05% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 42.4 MB, less than 95.87% of JavaScript online submissions for Trapping Rain Water.

var trap = function (height) {
    let maxHeights = Array(height.length).fill(0); // Space O(n)
    let max = 0;
    for (let i=0; i< height.length; i++) { // O(n)
        max = Math.max(max, height[i]);
        maxHeights[i] = max;
    }
    max =0;
    for (let i=height.length-1; i >= 0; i--) { // O(n)
        max = Math.max(max, height[i]);
        maxHeights[i] = Math.min(max, maxHeights[i]);
    }

    let totalWater = 0;
    for (let i=0; i< height.length; i++) { // O(n)
        let water = maxHeights[i] - height[i];
        if (water > 0)
            totalWater += water;
    }

    return totalWater;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9

// ST O(N)
// April 27, 2022
// Runtime: 72 ms, faster than 83.94% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 44.6 MB, less than 38.65% of JavaScript online submissions for Trapping Rain Water.