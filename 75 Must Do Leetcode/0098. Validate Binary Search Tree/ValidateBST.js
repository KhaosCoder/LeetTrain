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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    //console.log(root);
    function travelTree(tree, lBound, rBound) {
        if (tree == null)
            return true;
        let r = tree.val;
        if (!(rBound > r && r > lBound))
            return false;
        return (travelTree(tree.left, lBound, r) &&
            travelTree(tree.right, r, rBound));
    }
    let res = travelTree(root, -Infinity, Infinity);
    return res;
};

tree = bfsLevelOrder([5,1,4,null,null,3,6], tree, 0);
console.log(isValidBST(tree));
tree = bfsLevelOrder([2, 1, 3], tree, 0);
console.log(isValidBST(tree));
tree = bfsLevelOrder([5,4,6,null,null,3,7], tree, 0);
console.log(isValidBST(tree));

// 19/Jan/2022
// Runtime: 114 ms, faster than 36.48% of JavaScript online submissions for Validate Binary Search Tree.
// Memory Usage: 43.5 MB, less than 22.94% of JavaScript online submissions for Validate Binary Search Tree.