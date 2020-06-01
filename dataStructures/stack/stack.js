class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(data){
        let newNode = new Node(data);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    print(){
        let arr = [];
        let node = this.first;
        for(let i = 0; i < this.size; i++){
            arr.push(node.data);
            node = node.next;
        }
        console.log(arr);
    }
}

var stack = new Stack();
stack.push(1);
stack.print();
stack.push(2);
stack.print();
stack.push(3);
stack.print();