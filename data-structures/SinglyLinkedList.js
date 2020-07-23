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

  insert (index, value) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === this.length) {
      return !!this.push(value)
    }
    if (index === 0) {
      return !!this.unshift(value)
    }
    const newNode = new Node(value)
    const prevNode = this.get(index - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++
    return true
  }

  remove (index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    if (index === 0) {
      return this.shift()
    }
    const prevNode = this.get(index - 1)
    const removedNode = prevNode.next
    prevNode.next = removedNode.next
    this.length--
    return removedNode
  }

  reverse () {
    let node = this.head
    ;[this.tail, this.head] = [this.head, this.tail]
    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
  }

  print () {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    console.log(arr)
  }
}
