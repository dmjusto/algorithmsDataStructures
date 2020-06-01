class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }
    pop(){
        if(this.length === 0) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if(this.length === 0) return undefined;

        let shiftedNode = this.head;
        if(this.length === 1) return this.pop();
        else{
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }
    unshift(value){
        if(this.length === 0) return this.push(value);
        let newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;

        let node;
        if(index <= this.length/2){
            node = this.head;
            for(let i =0; i < index; i++){
                node = node.next;
            }
        }
        else{
            node = this.tail;
            for(let i = this.length -1; i > index; i--){
                node = node.prev;
            }
        }
        return node;
    }
    set(index, value){
        let node = this.get(index);
        if(node){
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) this.unshift(value);
        else if(index === this.length) this.push(value);

        else{
            let newNode = new Node(value);
            let leftNode = this.get(index -1);
            let rightNode = leftNode.next;

            leftNode.next = newNode;
            rightNode.prev = newNode;
            newNode.prev = leftNode;
            newNode.next = rightNode;
            this.length++
        }
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let targetNode = this.get(index);
        let leftNode = targetNode.prev;
        let rightNode = targetNode.next;

        leftNode.next = rightNode;
        rightNode.prev = leftNode;
        targetNode.prev = null, targetNode.next = null;

        this.length--;
        return targetNode;
    }

    print(){
        let arr = [];
        let current = this.head;
        for(let i = 0; i < this.length; i++){
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}

module.exports = DoublyLinkedList;


let list = new DoublyLinkedList();
list.push(5);
list.push(4);
list.push(3);
list.push(2);
list.push('ALLEGATOR');
list.print();
list.remove(5);
list.print();