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

  // depth first traverse
  dfsRecursive (start) {
    const results = []
    const visited = {}
    const { adjacencyList } = this

    ;(function dfs (vertex) {
      if (!vertex) {
        return null
      }

      visited[vertex] = true
      results.push(vertex)

      adjacencyList[vertex].forEach(adjacent => {
        if (!visited[adjacent]) {
          return dfs(adjacent)
        }
      })
    })(start)

    return results
  }
}

const g = new Graph()

// g.addVertex('Tokyo')
// g.addVertex('Tokyo')
// g.addVertex('Aspen')
// g.addVertex('Dallas')
// g.addVertex('Shanghai')
// g.addVertex('Madrid')
// g.addEdge('Tokyo', 'Dallas')
// g.addEdge('Aspen', 'Dallas')
// g.addEdge('Tokyo', 'Shanghai')
// g.addEdge('Shanghai', 'Madrid')
// g.removeEdge('Aspen', 'Dallas')
// g.removeVertex('Shanghai')

;['A', 'B', 'C', 'D', 'E', 'F'].forEach(el => g.addVertex(el))
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g)

const list = g.dfsRecursive('A')

console.log(list)
