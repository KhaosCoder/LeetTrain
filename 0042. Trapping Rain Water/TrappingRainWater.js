const rainWater = (height) => {
    if (height.length < 3)
        return 0;
    let left = 0, right = height.length - 1, i = 0;
    let maxLeft = height[left], maxRight = height[right];
    let totalWater = 0;

    while (left < right) {
        if (height[left] > height[right]) {
            right--;
            maxRight = Math.max(maxRight, height[right]);
            totalWater += maxRight - height[right];
        } else {
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            totalWater += maxLeft - height[left];
        }
    }

    return totalWater;
}

console.log(rainWater([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2])); // 15
console.log(rainWater([4, 2, 0, 3, 2, 5])); // 9

// Google Mock
// Mar 17
// Runtime: 105 ms, faster than 45.18% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 43 MB, less than 46.37% of JavaScript online submissions for Trapping Rain Water.
