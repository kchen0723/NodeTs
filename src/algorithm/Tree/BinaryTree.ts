import { TreeNode } from "./TreeNode";
export class BinaryTree{
    public Root: TreeNode | null = null;

    public IsSymmetric() : boolean {
        if(!this.Root){
            return true;
        }

        return this.IsSymmetricHelp(this.Root.left, this.Root.right);
    }

    private IsSymmetricHelp(left: TreeNode | null, right: TreeNode | null): boolean {
        if(!left && !right){
            return true;        
        }
        if(!left || !right){
            return false;
        }
        if(left.nodeValue !== right.nodeValue){
            return false;
        }
        let leftResult = this.IsSymmetricHelp(left.left, right.right);
        let rightResult = this.IsSymmetricHelp(left.right, right.left);
        return leftResult && rightResult
    }
}