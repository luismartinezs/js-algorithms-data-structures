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
}

const tree = new BinarySearchTree()

tree.insert(5)
tree.insert(6)
tree.insert(4)
tree.insert(2)
tree.insert(7)
tree.insert(3)
tree.insert(3)

console.dir(tree)
