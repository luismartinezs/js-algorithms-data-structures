// Dequeue in priority order
// Inefficient implementation
class PriorityQueue {
  constructor () {
    this.values = []
  }

  enqueue (val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  dequeue () {
    return this.values.shift()
  }

  sort () {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor () {
    this.adjacencyList = {}
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge (vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }

  // Dijkstra algorithm
  shortestPath (start, end) {
    const distances = {}
    const previous = {}
    const path = []
    const queue = new PriorityQueue()

    Object.keys(this.adjacencyList).forEach(vertex => {
      if (vertex === start) {
        distances[vertex] = 0
      } else {
        distances[vertex] = Infinity
      }
      queue.enqueue(vertex, distances[vertex])
      previous[vertex] = null
    })

    while (queue.values.length) {
      let currentVertex = queue.dequeue().val

      if (currentVertex === end) {
        while (previous[currentVertex]) {
          path.push(currentVertex)
          currentVertex = previous[currentVertex]
        }
        return path.concat(currentVertex).reverse()
      }

      if (currentVertex || distances[currentVertex !== Infinity]) {
        this.adjacencyList[currentVertex].forEach(adjacent => {
          const distance = distances[currentVertex] + adjacent.weight

          if (distance < distances[adjacent.node]) {
            distances[adjacent.node] = distance
            previous[adjacent.node] = currentVertex
            queue.enqueue(currentVertex, distance)
          }
        })
      }
    }
  }
}

const g = new WeightedGraph()
;['A', 'B', 'C', 'D', 'E', 'F'].forEach(el => g.addVertex(el))
g.addEdge('A', 'B', 1)
g.addEdge('A', 'C', 5)
g.addEdge('B', 'D', 2)
g.addEdge('C', 'E', 3)
g.addEdge('D', 'E', 2)
g.addEdge('D', 'F', 8)
g.addEdge('E', 'F', 1)

// console.log(g.adjacencyList.A)

const shortest = g.shortestPath('A', 'E')

console.log(shortest)

// const pq = new PriorityQueue()

// pq.enqueue('A', 1)
// pq.enqueue('B', 3)
// pq.enqueue('C', 2)
// pq.enqueue('D', 10)
// pq.enqueue('E', 5)

// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
