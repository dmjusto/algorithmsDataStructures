class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    Insert(value){
        this.values.push(value);
        let index = this.values.length -1;
        let parentIndex = this.GetParent(index);

        while(this.values[parentIndex] < this.values[index]){
            if(index <=0) break;

            this.Swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.GetParent(index);
        }
        return this;
    }

    ExtractMax(){
        if(this.values.length === 0) return null;
        if(this.values.length === 1) return this.values.pop();

        const firstIndex = 0;
        const lastIndex = this.values.length - 1;
        this.Swap(firstIndex, lastIndex);
        const max = this.values.pop();

        this.HeapDown();

        return max;
    }

    HeapDown(){
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
                if(leftChild > element) swapIndex = leftChildIndex;
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if((!swapIndex && rightChild > element) || (swapIndex && rightChild > leftChild)){
                    swapIndex = rightChildIndex;
                }
            }
            if(swapIndex === null) break;

            this.Swap(index, swapIndex);
            index = swapIndex;
        }
    }

    Swap(index1, index2)
    {
        const value = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = value;
    }

    GetParent(index){
        return Math.floor((index -1)/2);
    }
}



var heap = new MaxBinaryHeap();
heap.Insert(50);
heap.Insert(60);
heap.Insert(65);
heap.Insert(33);
heap.Insert(10);
heap.Insert(999);
console.log(heap.values);
console.log(heap.ExtractMax());
console.log(heap.values);
console.log(heap.ExtractMax());
console.log(heap.values);
// console.log(heap.GetMaxChildIndex(0));
// console.log(heap.values[2] < heap.values[1]);