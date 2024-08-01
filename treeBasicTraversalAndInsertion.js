class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertData(this.root, newNode);
        }
    }

    insertData(root, node) {
        if (root.data > node.data) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertData(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertData(root.right, node);
            }
        }
    }

    // Recursive pre-order traversal
    preOrderTraversal(root) {
        if (root === null) {
            return;
        } else {
            console.log(root.data);
            this.preOrderTraversal(root.left);
            this.preOrderTraversal(root.right);
        }
    }

    // Recursive in-order traversal
    inOrder(root) {
        if (root === null) {
            return;
        } else {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    // Recursive post-order traversal
    postOrderTraversal(root) {
        if (root === null) {
            return;
        } else {
            this.postOrderTraversal(root.left);
            this.postOrderTraversal(root.right);
            console.log(root.data);
        }
    }

    // Pre-order traversal using stack
    preOrderTraversalIterative(root) {
        let stackData = [];
        if (root !== null) {
            stackData.push(root);
        }
        while (stackData.length !== 0) {
            const node = stackData.pop();
            console.log(node.data);
            if (node.right !== null) {
                stackData.push(node.right);
            }
            if (node.left !== null) {
                stackData.push(node.left);
            }
        }
    }

    //In-order traversal
    inOrderIterativeTraversal(root){
        let stack = [];
        let node = root;

        while(true){
            if(node !== null){
                stack.push(node);
                node = node.left;
            }
            else{
                if(stack.length === 0){
                    break;
                }
                node = stack.pop();
                console.log(node.data);
                node = node.right;
            }
        }
    }

}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(8);
tree.insert(4);
tree.insert(6);
tree.insert(7);

console.log("Pre-order traversal:");
tree.preOrderTraversal(tree.root);

console.log("In-order traversal:");
tree.inOrder(tree.root);

console.log("Post-order traversal:");
tree.postOrderTraversal(tree.root);

console.log("Pre-order iterative traversal:");
tree.preOrderTraversalIterative(tree.root);

console.log("In-order  itterative Traversal")
tree.inOrderIterativeTraversal(tree.root)
