class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (value) {
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

  traverse () {
    let current = this.head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }

  pop () {
    if (!this.head) {
      return undefined
    }
    let newTail = null
    let current = this.head
    while (current.next) {
      newTail = current
      current = current.next
    }
    if (!newTail) {
      this.head = this.tail = null
      this.length = 0
    } else {
      newTail.next = null
      this.tail = newTail
      this.length--
    }
    return current.value
  }

  shift () {
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

  unshift (value) {
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

  get (index) {
    if (this.length <= index || index < 0) {
      return null
    }
    let i = 0
    let current = this.head
    while (i < index) {
      i++
      current = current.next
    }
    return current
  }

  set (index, value) {
    const node = this.get(index)
    if (!node) {
      return false
    }
    node.value = value
    return true
  }
}

let list = new SinglyLinkedList()
list.push('Zero')
list.push('One')
list.push('Two')
list.push('Three')
list.push('Four')
list.push('Five')
list.push('Six')

list.set(4, '4444')

console.log(list)

list.traverse()
