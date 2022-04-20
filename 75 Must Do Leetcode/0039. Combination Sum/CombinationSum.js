/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {
//     var res = [];

//     var recursive = (i, current, sum) => {
//         if (sum == target) {
//             res.push([...current]);
//             return;
//         }
//         if (i>=candidates.length || sum > target)
//             return;

//         current.push(candidates[i]);
//         recursive(i,current,sum+candidates[i]);
//         current.pop();
//         recursive(i+1,current,sum);
//     }

//     recursive(0,[],0);
//     return res;
// };

// 15/Jan/2022
// Runtime: 167 ms, faster than 19.76% of JavaScript online submissions for Combination Sum.
// Memory Usage: 41.3 MB, less than 72.44% of JavaScript online submissions for Combination Sum.

var combinationSum = function(candidates, target) {
    var res = [];
    var currentCombination = [];

    const recursive = (i, target) => {
        if (target == 0) {
            res.push([...currentCombination]);
            return;
        }
        if (target<0) 
            return;
        if (i>=candidates.length)
            return;

        currentCombination.push(candidates[i]);
        recursive(i,target - candidates[i]);
        currentCombination.pop();
        recursive(i+1,target);
    }

    recursive(0,target);
    return res;
};

// 15/Jan/2022
// Runtime: 139 ms, faster than 32.57% of JavaScript online submissions for Combination Sum.
// Memory Usage: 40.8 MB, less than 99.18% of JavaScript online submissions for Combination Sum.


console.log(combinationSum([2,3,6,7], 7));