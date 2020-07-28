// array implementation >> not efficient

let q = []

// Option A

q.push('zero')
q.push('one')
q.push('two')
q.shift()
q.shift()
q.shift()

// Option B

q.unshift('zero')
q.unshift('one')
q.unshift('two')
q.pop()
q.pop()
q.pop()

// Linked List implementation

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }
  enqueue (value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }
  dequeue () {
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
}

q = new Queue()
q.enqueue('zero')
q.enqueue('one')
q.enqueue('two')
console.log(q.dequeue()) // zero
console.log(q.dequeue()) // one
console.log(q.dequeue()) // two
console.log(q.dequeue()) // undefined
