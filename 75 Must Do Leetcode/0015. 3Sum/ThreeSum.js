/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a,b) => a-b);
    let res = [];
    for (var i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1])
            continue;
        let [j, k] = [i+1, nums.length - 1];
        while (k>j) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum > 0)
                k--;
            else if (sum < 0)
                j++;
            else {
                res.push([nums[i], nums[j], nums[k]])
                j++;
                while (nums[j] == nums[j-1] && j < k) {
                    j++;
                }
            }
        }
    }

    return res;
};

for (var r of threeSum([-1, 0, 1, 2, -1, -4])) {
    console.log(r);
}
console.log("=========")
for (var r of threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])) {
    console.log(r);
}
console.log("=========")
for (var r of threeSum([])) {
    console.log(r);
}
console.log("=========")
for (var r of threeSum([-1,0,1,0])) {
    console.log(r);
}
console.log("=========")

// 12/Jan/2022
// Runtime: 331 ms, faster than 28.74% of JavaScript online submissions for 3Sum.
// Memory Usage: 50.3 MB, less than 29.51% of JavaScript online submissions for 3Sum.