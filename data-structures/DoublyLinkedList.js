class Node {
  constructor (val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  print () {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }

  push (val) {
    const node = new Node(val)
    if (!this.length) {
      this.head = this.tail = node
      this.length++
      return this
    }
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
    this.length++
    return this
  }

  pop () {
    if (!this.length) {
      return undefined
    }
    const popped = this.tail
    if (this.length === 1) {
      this.head = this.tail = null
      this.length--
      return popped.val
    }
    this.tail = popped.prev
    this.tail.next = null
    popped.prev = null
    this.length--
    return popped.val
  }

  shift () {
    if (!this.head) {
      return undefined
    }
    const shifted = this.head
    if (this.length === 1) {
      this.head = this.tail = null
      this.length--
      return shifted.val
    }
    this.head = shifted.next
    this.head.prev = null
    shifted.next = null
    this.length--
    return shifted.val
  }

  unshift (val) {
    const newHead = new Node(val)
    this.length++
    if (!this.head) {
      this.head = this.tail = newHead
      return this
    }
    newHead.next = this.head
    this.head.prev = newHead
    this.head = newHead
    return this
  }

  get (index) {
    if (this.length <= index || index < 0) {
      return null
    }
    let current
    if (this.length / 2 > index) {
      let i = 0
      current = this.head
      while (i < index) {
        i++
        current = current.next
      }
    } else {
      let i = this.length - 1
      current = this.tail
      while (i > index) {
        i--
        current = current.prev
      }
    }
    return current
  }

  set (index, val) {
    const node = this.get(index)
    if (!node) {
      return false
    }
    node.val = val
    return true
  }

  insert (index, val) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === this.length) {
      return !!this.push(val)
    }
    if (index === 0) {
      return !!this.unshift(val)
    }
    const newNode = new Node(val)
    const prevNode = this.get(index - 1)
    const nextNode = prevNode.next
    newNode.next = nextNode
    newNode.prev = prevNode
    prevNode.next = newNode
    nextNode.prev = newNode
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
    const nextNode = removedNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    removedNode.prev = removedNode.next = null
    this.length--
    return removedNode
  }
}
