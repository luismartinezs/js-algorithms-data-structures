// array implementation

let stack = []

// push / pop >> more efficient

stack.push('google')
stack.push('instagram')
stack.push('youtube')
stack.pop()
stack.pop()
stack.pop()

// unshift / shift >> less efficient

stack.unshift('create new file')
stack.unshift('resize file')
stack.unshift('cloned out wrinkle')
stack.shift()
stack.shift()
stack.shift()

// linked list implementation

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // pop == shift from SinglyLinkedList
  pop () {
    if (!this.length) {
      return undefined
    }
    const oldHead = this.head
    this.head = oldHead.next
    this.length--
    if (!this.length) {
      this.tail = null
    }
    return oldHead.value
  }

  // push == unshift from SinglyLinkedList
  push (value) {
    const newHead = new Node(value)
    this.length++
    if (!this.head) {
      this.head = this.tail = newHead
      return this
    }
    newHead.next = this.head
    this.head = newHead
    return this
  }
}

stack = new Stack()
stack.push('zero')
stack.push('one')
console.log(stack.pop()) // one
console.log(stack.pop()) // zero
console.log(stack.pop()) // undefined
