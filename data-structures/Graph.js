class Graph {
  constructor () {
    this.adjacencyList = {}
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge (vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge (v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      vertex => vertex !== v2
    )
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      vertex => vertex !== v1
    )
  }

  removeVertex (vertex) {
    this.adjacencyList[vertex].forEach(adjacent =>
      this.removeEdge(vertex, adjacent)
    )
    delete this.adjacencyList[vertex]
  }
}

const g = new Graph()

g.addVertex('Tokyo')
g.addVertex('Tokyo')
g.addVertex('Aspen')
g.addVertex('Dallas')
g.addVertex('Shanghai')
g.addVertex('Madrid')
g.addEdge('Tokyo', 'Dallas')
g.addEdge('Aspen', 'Dallas')
g.addEdge('Tokyo', 'Shanghai')
g.addEdge('Shanghai', 'Madrid')
g.removeEdge('Aspen', 'Dallas')
g.removeVertex('Shanghai')

console.log(g)
