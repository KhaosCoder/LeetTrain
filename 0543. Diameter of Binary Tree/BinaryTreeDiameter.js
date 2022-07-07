/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let diameter = 0;
    const height = (node) => {
        if (!node)
            return -1;
        let left = height(node.left), right = height(node.right); // Get heights from both children
        diameter = Math.max(2 + left + right, diameter); // Store max diameter
        return 1 + Math.max(left,right);
    }

    height(root);
    return diameter;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const subttest = new TreeNode(2,4,5);
const tree = new TreeNode(1,subttest,3);

console.log(diameterOfBinaryTree(tree));

// 4 Jul, 2022
// Runtime: 82 ms, faster than 81.80% of JavaScript online submissions for Diameter of Binary Tree.
// Memory Usage: 46 MB, less than 23.81% of JavaScript online submissions for Diameter of Binary Tree.