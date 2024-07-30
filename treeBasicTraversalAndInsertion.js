class Node{
    constructor(data){
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

        if(this.root === null){
            this.root = newNode;
        }
        else{
            this.insertData(this.root, newNode);
        }
    }

    insertData(root, node){
        const currentNode = node;
        if(root.data > currentNode.data){
            if(root.left === null){
                root.left = currentNode;
            }
            else {
                this.insertData(root.left, currentNode);
            }
        }
        else {
            if(root.right === null){
                root.right = currentNode;
            }
            else {
                this.insertData(root.right, currentNode);
            }
        }
    }

    // Recursive pre-order traversal
    preOrderTraversal(root){
        if(root === null){
            return
        }
        else {
            console.log(root.data);
            this.preOrderTraversal(root.left);
            this.preOrderTraversal(root.right);
        }
    }

    // Recursive In-order traversal
    inOrder(root){
        if(root === null){
            return
        }
        else {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

     // Recursive post-order traversal
     postOrderTraversal(root){
        if(root === null){
            return
        }
        else {
            this.postOrderTraversal(root.left);
            this.postOrderTraversal(root.right);
            console.log(root.data);
        }
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(8);
tree.insert(4);
tree.insert(6);
tree.insert(7);


console.log("pre-order traversal:");
console.log(tree.preOrderTraversal(tree.root));

console.log("In-order traversal:");
console.log(tree.inOrder(tree.root));


console.log("post-order traversal:");
console.log(tree.postOrderTraversal(tree.root));
