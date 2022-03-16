/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let maxWindow = [];
    let queue = [];
    let l =0, r=0;
    while (r < nums.length) {
        while (queue.length > 0 && nums[queue[queue.length-1]] < nums[r]) {
            queue.pop();
        }
        queue.push(r);

        if (l > queue[0])
            queue.shift();
        
        if ((r+1) >= k) { 
            maxWindow.push(nums[queue[0]]);
            l++;
        }
        r++
    }
    console.log(maxWindow);
    return maxWindow;
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3); // [3,3,5,5,6,7]
maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3); // [3,3,5,5,6,7]

// Mar 14 
// Runtime: 769 ms, faster than 49.89% of JavaScript online submissions for Sliding Window Maximum.
// Memory Usage: 84.6 MB, less than 51.55% of JavaScript online submissions for Sliding Window Maximum.