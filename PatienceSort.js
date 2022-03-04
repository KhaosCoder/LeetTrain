var patienceSort = function(nums) {
    if (nums.every(val => val == nums[0]))
        return 1;
    let patience = Array(nums.length).fill(null).map(_ => Array());
    patience[0].push(nums[0]);
    for (let i = 1; i < nums.length; i++) { // O(n)
        let currentVal = nums[i];
        for (let j = 0; j < patience.length; j++) { // O(logn)
            let currentSeq = patience[j];
            if (currentVal < arrLastVal(currentSeq) || currentSeq.length === 0) {
                currentSeq.push(currentVal);
                break;
            }
        }
    }
    return patience;
};

const arrLastVal = (stack) => {
    return stack[stack.length-1];
}

console.log(patienceSort([10,9,2,5,3,7,101,18])); // 2,5,7,101 => 4
console.log(patienceSort([0,1,0,3,2,3])); // 0,1,2,3 => 4
console.log(patienceSort([7,7,7,7,7,7,7])); // 7 => 1
console.log(patienceSort([4,10,4,3,8,9])); // 4,8,9 => 3