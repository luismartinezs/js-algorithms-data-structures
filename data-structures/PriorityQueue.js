function swap (arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

class Node {
  constructor (val, priority) {
    this.val = val
    this.priority = priority
  }
}

// Implementation using Min Binary Heap
class PriorityQueue {
  constructor () {
    this.values = []
  }

  enqueue (val, priority) {
    const node = new Node(val, priority)
    this.values.push(node)

    this.bubbleUp()

    return this.values
  }

  dequeue () {
    if (!this.values.length) {
      return undefined
    }

    if (this.values.length === 1) {
      return this.values.pop()
    }

    ;[this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0]
    ]
    const oldRoot = this.values.pop()
    this.bubbleDown()

    return oldRoot
  }

  bubbleUp () {
    let index = this.values.length - 1
    let parentIndex = Math.floor((index - 1) / 2)

    while (
      index > 0 &&
      this.values[parentIndex].priority > this.values[index].priority
    ) {
      ;[this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex]
      ]
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
  }

  bubbleDown () {
    let index = 0
    const element = this.values[0]
    const length = this.values.length

    while (true) {
      let leftIndex = 2 * index + 1
      let rightIndex = 2 * index + 2
      let rightElem, leftElem
      let swapIndex = null

      if (leftIndex < length) {
        leftElem = this.values[leftIndex]
        if (leftElem.priority < element.priority) {
          swapIndex = leftIndex
        }
      }

      if (rightIndex < length) {
        rightElem = this.values[rightIndex]
        if (
          (swapIndex === null && rightElem.priority < element.priority) ||
          (swapIndex !== null && rightElem.priority < leftElem.priority)
        ) {
          swapIndex = rightIndex
        }
      }

      if (!swapIndex) {
        break
      }
      swap(this.values, index, swapIndex)
      index = swapIndex
    }
  }
}

const q = new PriorityQueue()

q.enqueue('flu', 3)
q.enqueue('concussion', 2)
q.enqueue('drunk', 4)
q.enqueue('head exploded', 1)
q.enqueue('hypochondria', 10)
q.enqueue('very mild headache', 5)
q.enqueue('fear of Cthulhu', 7)

const healed = []

healed.push(q.dequeue())
healed.push(q.dequeue())
healed.push(q.dequeue())
healed.push(q.dequeue())
healed.push(q.dequeue())
q.enqueue('hunger', 9)
q.enqueue('extreme hunger', 3)
q.enqueue('complete happiness', 100)
q.enqueue('laziness', 11)

healed.push(q.dequeue())
healed.push(q.dequeue())
healed.push(q.dequeue())
healed.push(q.dequeue())

console.log(healed)

console.log(q.values)

console.log(q)
