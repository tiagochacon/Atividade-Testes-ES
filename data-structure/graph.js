class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Adiciona um vértice ao grafo
    addVertex(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = [];
        }
    }

    // Adiciona uma aresta entre dois vértices
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // Remove uma aresta entre dois vértices
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    // Remove um vértice do grafo
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

let graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");

graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");

console.log(graph.adjacencyList); // { Tokyo: [ 'Dallas' ], Dallas: [ 'Tokyo', 'Aspen' ], Aspen: [ 'Dallas' ] }

graph.removeEdge("Dallas", "Aspen");

console.log(graph.adjacencyList); // { Tokyo: [ 'Dallas' ], Dallas: [ 'Tokyo' ], Aspen: [] }

graph.removeVertex("Dallas");

console.log(graph.adjacencyList); // { Tokyo: [], Aspen: [] }