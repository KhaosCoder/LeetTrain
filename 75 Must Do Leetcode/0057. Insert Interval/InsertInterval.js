/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (!intervals.length)
        return [newInterval];
    let indexs = [];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i].length) {
            if (newInterval[0] > intervals[i][1])
                continue;
            if (newInterval[1] < intervals[i][0])
                continue;
            indexs.push(i);
        } else intervals.splice(i,1);
    }

    if (!indexs.length)
        return [...intervals, newInterval].sort((a, b) => a[0] - b[0]);
    intervals[indexs[0]] = [Math.min(newInterval[0], intervals[indexs[0]][0]), Math.max(newInterval[1], intervals[indexs[indexs.length - 1]][1])];
    intervals.splice(indexs[1], indexs.length - 1).sort((a, b) => a[0] - b[0]);
    return intervals;
};

// 15/Jan/2022
// Runtime: 88 ms, faster than 66.07% of JavaScript online submissions for Insert Interval.
// Memory Usage: 40.9 MB, less than 75.07% of JavaScript online submissions for Insert Interval.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = [];
    for(let i=0; i<intervals.length; i++){
        let currInterval = intervals[i];
        
        if(newInterval[1] < currInterval[0]){
            return [...result, newInterval, ...intervals.slice(i)]
        }
        
        if(currInterval[1] < newInterval[0]){
            result.push(currInterval);
        } else {
            newInterval[0] = Math.min(newInterval[0], currInterval[0]);
            newInterval[1] = Math.max(newInterval[1], currInterval[1]);
        }
    }
    
    result.push(newInterval);
    return result;
};

// 15/Jan/2022
// Runtime: 80 ms, faster than 91.38% of JavaScript online submissions for Insert Interval.
// Memory Usage: 40.9 MB, less than 75.07% of JavaScript online submissions for Insert Interval.

for (let r of insert([[1, 3], [6, 9]], [2, 5]))
    console.log(r);
console.log("======");
for (let r of insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
    console.log(r);
console.log("======");
for (let r of insert([[1, 5]], [0, 0]))
    console.log(r);
console.log("======");
for (let r of insert([[1, 5]], [5, 7]))
    console.log(r);
console.log("======");
for (let r of insert([[]], [5, 7]))
    console.log(r);
console.log("======");
for (let r of insert([[1, 5]], [6, 8]))
    console.log(r);