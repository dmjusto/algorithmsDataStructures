
const PriorityQueue = require('../heaps/priorityQueue');


class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vert1, vert2, weight){
        this.adjacencyList[vert1].push({node: vert2, weight});
        this.adjacencyList[vert2].push({node: vert1, weight});
    }

    dijkstras(start, end){
        const nodeQueue = new PriorityQueue();
        const shortestDistanceTo = {};
        const previous = {};
        const path = [];
        let currentNode;

        shortestDistanceTo[start] = 0;
        nodeQueue.enqueue(start, 0);

        //Set initial state of data structures
        for (const vertex in this.adjacencyList) {
            if (this.adjacencyList.hasOwnProperty(vertex)) {
                if(vertex !== start){
                    shortestDistanceTo[vertex] = Infinity;
                    nodeQueue.enqueue(vertex, Infinity);
                }
                previous[vertex] = null;
            }
        }

        while(nodeQueue.values.length){
             currentNode = nodeQueue.dequeue().value;
             if(currentNode === end){
                 /**@todo We are done*/
                 while(previous[currentNode]){
                     path.unshift(currentNode);
                     currentNode = previous[currentNode];
                 }
                 path.unshift(start);
                break;
             }else{
                for(const index in this.adjacencyList[currentNode]){
                    const neighbor = this.adjacencyList[currentNode][index];

                    //Calculate new shortestDistanceTo to neighboring node
                    let tempDistance = shortestDistanceTo[currentNode] + neighbor.weight;
                    if(tempDistance < shortestDistanceTo[neighbor.node]){
                        shortestDistanceTo[neighbor.node] = tempDistance;

                        //update shortest path to neighbor
                        previous[neighbor.node] = currentNode;
                        nodeQueue.enqueue(neighbor.node, tempDistance);
                    }
                }
             }  
        }
        return path;
    }
}

var graph = new WeightedGraph();

graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addVertex('f');

graph.addEdge('a', 'b', 4);
graph.addEdge('a', 'c', 2);
graph.addEdge('b', 'e', 3);
graph.addEdge('c', 'd', 2);
graph.addEdge('c', 'f', 4);
graph.addEdge('d', 'e', 3);
graph.addEdge('d', 'f', 1);
graph.addEdge('e', 'f', 1);

// console.log(graph.adjacencyList);
console.log(graph.dijkstras('a', 'e'));

