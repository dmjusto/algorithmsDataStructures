class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0) return undefined;

        let prev = this.head;
        let temp = this.head;
        while(temp.next){
            prev = temp;
            temp = temp.next
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    shift(){
        if(this.length === 0) return undefined;

        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }

        return temp;
    }
}

module.exports = SinglyLinkedList;