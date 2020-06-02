class Node{
    constructor(data){
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);

        if(!this.root){
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while(true){
            if(data < currentNode.data){
                if(!currentNode.leftChild){
                    currentNode.leftChild = newNode;
                    break;
                } 
                else currentNode = currentNode.leftChild;
                
            }
            else if(data > currentNode.data){
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

    find(data){
        if(!this.root || !data) return false;

        let currentNode = this.root;
        while(currentNode){
            if(data < currentNode.data){
                currentNode = currentNode.leftChild;
            }
            else if(data > currentNode.data){
                currentNode = currentNode.rightChild;
            }else return true;
        }
        return false;
    }
}

var tree = new BinarySearchTree();
tree.insert(50);
tree.insert(12);
tree.insert(67);
tree.insert(7);
console.log(tree);

console.log(tree.find(50));
console.log(tree.find(12));
console.log(tree.find(67));
console.log(tree.find(7));
console.log(tree.find(99));