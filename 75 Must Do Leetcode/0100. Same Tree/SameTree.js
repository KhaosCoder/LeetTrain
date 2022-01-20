/**
 * Definition for a binary tree node.
 */
function TreeNode(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
// root node
let tree;
// BFS populate from level order array
function bfsLevelOrder(arr, tree, i) {
    if (arr.length > i) {
        let temp = new TreeNode(arr[i]);
        tree = temp;
        tree.left = bfsLevelOrder(arr, tree.left, 2 * i + 1);
        tree.right = bfsLevelOrder(arr, tree.right, 2 * i + 2);
    }
    return tree;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p == null && q == null)
        return true;
    if (p == null | q == null || p.val != q.val)
        return false;

    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};

// 19/Jan/2022
// Runtime: 96 ms, faster than 36.47% of JavaScript online submissions for Same Tree.
// Memory Usage: 39.7 MB, less than 65.70% of JavaScript online submissions for Same Tree.

tree = bfsLevelOrder([1, 1], tree, 0);
let tree2 = bfsLevelOrder([1, null, 1], tree, 0);
console.log(isSameTree(tree, tree2));