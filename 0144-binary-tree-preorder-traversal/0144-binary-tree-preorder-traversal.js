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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let data = [];

    const traverse = (node) => {
        if (!node) return null
        
        data.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(root)
    return data;
};

//   if (!root) return [];
//   const result = [];
  
//   const preorder = (node) => {
//     if(!node) return null;
    
//     result.push(node.val);
//     if(node.left) preorder(node.left);
//     if(node.right) preorder(node.right);
//   }
  
//   preorder(root)
//   return result;