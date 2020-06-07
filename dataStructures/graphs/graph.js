class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(name){
        this.adjacencyList[name] = [];
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v =>
            v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v =>
            v !== vertex1);
    }

    removeVertex(vertex){
        this.adjacencyList[vertex].forEach(item => {
            this.removeEdge(vertex, item);
        })
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(vertex){
        let results = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;

        function DFS(vertex){
            visited[vertex] = true;
            results.push(vertex);

            adjacencyList[vertex].forEach( neighbor => {
                if(!visited[neighbor]) return DFS(neighbor);
            })
        }
        DFS(vertex);
        return results;
    }

    DFSIterative(start){
        let results = [];
        let visited = {};
        let stack = [start];

        while(stack.length){
            const vertex = stack.pop();
            if(!visited[vertex]){
                visited[vertex] = true;
                results.push(vertex);
            }
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) stack.push(neighbor);
            })
        }
        return results;
    }

    BFS(start){
        let queue = [start];
        let results = [];
        let visited = {};
        let currrentVertex;

        visited[start] = true;

        while(queue.length){
            currrentVertex = queue.shift();
            results.push(currrentVertex);

            this.adjacencyList[currrentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return results;
    }
}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));
