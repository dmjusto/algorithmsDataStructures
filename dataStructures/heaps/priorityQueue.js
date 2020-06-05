//PRIORITY QUEUE IMPLEMENTED WITH MAX BINARY HEAP
class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    Enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.BubbleUp();
        
        return this;
    }

    DeQueue(){
        const max = this.values[0];
        const endElement = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = endElement;
            this.Sink();
        }
        return max;
    }


    Sink(){
        let index = 0;
        const length = this.values.length;
        const element = this.values[index];

        while(true){
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swapIndex = null;
            let leftChild, rightChild;

            if(leftChildIndex < length ){
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority > element.priority) swapIndex = leftChildIndex;
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if(
                    (!swapIndex && rightChild.priority > element.priority) || 
                    (swapIndex && rightChild.priority > leftChild.priority)
                ){
                    swapIndex = rightChildIndex;
                }
            }
            if(swapIndex === null) break;

            const temp = this.values[swapIndex];
            this.values[swapIndex] = this.values[index];
            this.values[index] = temp;
            index = swapIndex;
        }
    }

    BubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];

        while(index > 0){
            const parentIndex = Math.floor((index -1)/2);
            const parent = this.values[parentIndex];
            if(element.priority <= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
}

var queue = new PriorityQueue();
queue.Enqueue(2, 2);
queue.Enqueue(3, 3);
queue.Enqueue(4, 4);
queue.Enqueue(5, 5);
queue.Enqueue(6, 6);
queue.Enqueue(7, 7);
queue.Enqueue(1, 1);
console.log(queue.values);
queue.DeQueue();
console.log(queue.values);