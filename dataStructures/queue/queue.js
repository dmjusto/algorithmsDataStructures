class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(data){
        let newNode = new Node(data);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        
        return ++this.size;
    }
    dequeue(){
        if(this.size === 0) return null;

        let node = this.first;
        if(this.size === 1){
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return node.data;
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

var queue = new Queue();

queue.enqueue(1);
queue.print();
queue.enqueue(2);
queue.print();
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();