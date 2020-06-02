const Queue = require('../queue/queue');

class Node{
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while(true){
            if(value < currentNode.value){
                if(!currentNode.leftChild){
                    currentNode.leftChild = newNode;
                    break;
                } 
                else currentNode = currentNode.leftChild;
                
            }
            else if(value > currentNode.value){
                if(!currentNode.rightChild){
                    currentNode.rightChild = newNode;
                    break;
                } 
                else currentNode = currentNode.rightChild;   
            }
            else break;
        }
        return this;
    }

    find(value){
        if(!this.root || !value) return false;

        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.leftChild;
            }
            else if(value > currentNode.value){
                currentNode = currentNode.rightChild;
            }else return true;
        }
        return false;
    }

    //BREADTH FIRST SEARCH
    bfs(){
        if(!this.root) return null;

        let searchQueue = new Queue();
        let result = [];
        searchQueue.enqueue(this.root);

        while(searchQueue.size > 0){
            const current = searchQueue.dequeue();
            result.push(current.value);

            if(current.leftChild) searchQueue.enqueue(current.leftChild);
            if(current.rightChild) searchQueue.enqueue(current.rightChild);
        }
        return result;
    }

    // DEPTH FIRST SEARCH
    dfsPreOrder(){
        if(!this.root) return null;

        let data = [];
        traverse(this.root);

        return data;

        function traverse(node){
            data.push(node.value);
            if(node.leftChild) traverse(node.leftChild);
            if(node.rightChild) traverse(node.rightChild);
        }
    }

    dfsPostOrder(){
        if(!this.root) return null;

        let data = [];
        Traverse(this.root);

        return data;

        function Traverse(node){
            if(node.leftChild) Traverse(node.leftChild);
            if(node.rightChild) Traverse(node.rightChild);
            data.push(node.value);
        }
    }

    dfsInOrder(){
        if(!this.root) return null;

        let data = [];
        Traverse(this.root);

        return data;

        function Traverse(node){
            if(node.leftChild) Traverse(node.leftChild);
            data.push(node.value);
            if(node.rightChild) Traverse(node.rightChild);
        }
    }
}


//         50
//      12       67
//    7      51       99
//  3  9       60  73   106
var tree = new BinarySearchTree();
tree.insert(50);
tree.insert(12);
tree.insert(67);
tree.insert(7);
tree.insert(99);
tree.insert(3);
tree.insert(51);
tree.insert(9);
tree.insert(60);
tree.insert(73);
tree.insert(106);
console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());