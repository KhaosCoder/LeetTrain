/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = 0, sell = 1;
    let maxP = 0;
    while (sell < prices.length) {
        if (prices[buy] >= prices[sell]) {
            buy = sell;
        } else {
            maxP = Math.max(maxP, prices[sell] - prices[buy]);
        }
        sell++;
    }
    return maxP;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 1])); // 0
console.log(maxProfit([2, 1, 3])); // 2

// Time O(N) - S O(1)
// April 27, 2022
// Runtime: 112 ms, faster than 47.93% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 51.7 MB, less than 62.75% of JavaScript online submissions for Best Time to Buy and Sell Stock.