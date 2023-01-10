/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
    let data:number[] = [];
    
    const traverse = (node) => {
        if (!node) return null
        
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
        data.push(node.val)
    }
    traverse(root)
    
    return data;
};