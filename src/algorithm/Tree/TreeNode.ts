export class TreeNode{
    nodeValue: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(nodeValue: number = 0, left: TreeNode | null = null, right: TreeNode | null = null){
        this.nodeValue = nodeValue;
        this.left = left;
        this.right = right;
    }
}