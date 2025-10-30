import { TreeNode } from "../../../algorithm/Tree/TreeNode";    
import { BinaryTree } from "../../../algorithm/Tree/BinaryTree";

describe("BinaryTree", () => {
    let bt : BinaryTree;

    beforeEach(() => {
        bt = new BinaryTree();
        bt.Root = new TreeNode(5);
        bt.Root.left = new TreeNode(4);
        bt.Root.right = new TreeNode(4);
        bt.Root.left.right = new TreeNode(1);
    });

    test("IsSymmetric", () => {
        var actual = bt.IsSymmetric();
        expect(actual).toBe(false);
    });
})