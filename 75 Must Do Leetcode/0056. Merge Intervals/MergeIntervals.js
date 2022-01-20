/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = [intervals[i][0], intervals[i][1]];
        let upper = merged[merged.length - 1][1];
        if (start <= upper)
            merged[merged.length - 1][1] = Math.max(end, upper);
        else merged.push([start, end]);
    }

    return merged;
};


for (interval of merge([[1, 3], [2, 6], [8, 1], [15, 18]]))
    console.log(interval);
console.log("========");
for (interval of merge([[1, 4], [0, 4]]))
    console.log(interval);
console.log("========");
for (interval of merge([[1, 4], [0, 0]]))
    console.log(interval);
console.log("========");
for (interval of merge([[1, 4], [0, 1]]))
    console.log(interval);
console.log("========");
for (interval of merge([[1, 4], [2, 3]]))
    console.log(interval);
console.log("========");
for (interval of merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
    console.log(interval);

// 15/Jan/2022
// Runtime: 213 ms, faster than 10.15% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 48.5 MB, less than 5.21% of JavaScript online submissions for Merge Intervals.