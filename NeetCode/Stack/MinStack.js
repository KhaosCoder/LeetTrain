
var MinStack = function() {
    this.stack = [];
    this.minimums = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.minimums.length === 0 || val <= this.minimums[this.minimums.length -1])
        this.minimums.push(val);
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.stack.pop();
    if (popped === this.minimums[this.minimums.length -1])
        this.minimums.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minimums[this.minimums.length - 1];
};


// Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
obj.push(0)
obj.push(1)
obj.push(0)
var min = obj.getMin();
console.log(min); // -3
obj.pop()
// var top = obj.top();
// console.log(top); // 0
min = obj.getMin()
console.log(min); // -2


// May, 2022
// Runtime: 185 ms, faster than 33.29% of JavaScript online submissions for Min Stack.
// Memory Usage: 50.1 MB, less than 30.20% of JavaScript online submissions for Min Stack.
// Space O(n) Time O(1)