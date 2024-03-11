class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insere um valor na árvore
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    // Procura um valor na árvore
    find(value) {
        if (!this.root) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    rotateLeft(node) {
        let newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }

    rotateRight(node) {
        let newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
    }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
tree.insert(12);

console.log(tree.find(7)); // Node { value: 7, left: null, right: null }
console.log(tree.find(2)); // undefined