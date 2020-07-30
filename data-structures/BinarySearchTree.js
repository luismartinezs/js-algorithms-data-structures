const Queue = require('./Queue.js')

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert (value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let node = this.root
    while (true) {
      if (node.value === value) {
        return this
      }
      if (node.value > value) {
        if (!node.left) {
          node.left = newNode
          return this
        }
        node = node.left
      }
      if (node.value < value) {
        if (!node.right) {
          node.right = newNode
          return this
        }
        node = node.right
      }
    }
  }

  find (value) {
    if (!this.root) {
      return false
    }
    let node = this.root
    while (node) {
      if (value < node.value) {
        node = node.left
      } else if (value > node.value) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  // Breadth-first search
  bfsTraverse () {
    const queue = new Queue()
    const values = []
    let current

    queue.enqueue(this.root)

    while (queue.length) {
      current = queue.dequeue().value
      values.push(current.value)

      if (current.left) {
        queue.enqueue(current.left)
      }

      if (current.right) {
        queue.enqueue(current.right)
      }
    }

    return values
  }

  // Depth-first search
  dfsPreorder () {
    const visited = []

    function traverseNode (node) {
      visited.push(node.value)

      if (node.left) {
        traverseNode(node.left)
      }
      if (node.right) {
        traverseNode(node.right)
      }
    }

    traverseNode(this.root)

    return visited
  }

  dfsPostorder () {
    const visited = []

    function traverseNode (node) {
      if (node.left) {
        traverseNode(node.left)
      }
      if (node.right) {
        traverseNode(node.right)
      }
      visited.push(node.value)
    }

    traverseNode(this.root)

    return visited
  }

  dfsInorder () {
    const visited = []

    function traverseNode (node) {
      if (node.left) {
        traverseNode(node.left)
      }
      visited.push(node.value)
      if (node.right) {
        traverseNode(node.right)
      }
    }

    traverseNode(this.root)

    return visited
  }
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// console.log(tree.find(2)) // true
// console.log(tree.find(10)) // false

tree.traverse = tree.dfsPostorder

console.log(tree.bfsTraverse())
console.log(tree.dfsPreorder())
console.log(tree.dfsPostorder())
console.log(tree.dfsInorder())
