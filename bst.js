class Tree {
    constructor() {
        this.rootNode = null;
    }

    addNode(node) {
        if (this.rootNode === null) {
            this[node.value] = node;
            this.rootNode = node;

            return;
        }
        this[node.value] = node;

        let acceptorNode = this.findPosition(node);

        if (node.value < acceptorNode.value) {
            acceptorNode.leftNode = node.value;
            node.parent = acceptorNode.value;
        }

        if (node.value > acceptorNode.value) {
            acceptorNode.rightNode = node.value;
            node.parent = acceptorNode.value;
        }
    }

    findPosition(node, currentNode = this.rootNode) {
        if (!this.rootNode) return null;
        if (node.value === currentNode.value) {
            return 'this node is present';
        }

        if (node.value < currentNode.value) {
            if (!currentNode.leftNode) {
                return currentNode;
            } else {
                return this.findPosition(node, this[currentNode.leftNode]);
            }
        }

        if (node.value > currentNode.value) {
            if (!currentNode.rightNode) {
                return currentNode;
            } else {
                return this.findPosition(node, this[currentNode.rightNode]);
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.leftNode = null;
        this.rightNode = null;
    }
}

const tree = new Tree();

tree.addNode(new Node(5));
tree.addNode(new Node(13));
tree.addNode(new Node(10));
tree.addNode(new Node(1));
tree.addNode(new Node(3));
tree.addNode(new Node(16));

console.log(tree);
