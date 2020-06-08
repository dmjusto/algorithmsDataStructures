//PRIORITY QUEUE IMPLEMENTED WITH MIN BINARY HEAP
class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.BubbleUp();
        
        return this;
    }

    dequeue(){
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
                if(leftChild.priority < element.priority) swapIndex = leftChildIndex;
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if(
                    (!swapIndex && rightChild.priority < element.priority) || 
                    (swapIndex && rightChild.priority < leftChild.priority)
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
            if(element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
}

module.exports = PriorityQueue;

// var queue = new PriorityQueue();
// queue.enqueue(2, 2);
// queue.enqueue(3, 3);
// queue.enqueue(4, 4);
// queue.enqueue(5, 5);
// queue.enqueue(6, 6);
// queue.enqueue(7, 7);
// queue.enqueue(1, 1);
// console.log(queue.values);
// queue.dequeue();
// console.log(queue.values);