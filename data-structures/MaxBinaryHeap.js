function swap (arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

class MaxBinaryHeap {
  constructor () {
    this.values = []
  }

  insert (val) {
    this.values.push(val)

    this.bubbleUp()

    return this.values
  }

  // Usually root is removed and heap is adjusted (bubble down). Also called extractMax
  remove () {
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

    while (this.values[parentIndex] < this.values[index] && index > 0) {
      ;[this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex]
      ]
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
  }

  // Course solution. I believe mine is a bit better
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
        if (leftElem > element) {
          swapIndex = leftIndex
        }
      }

      if (rightIndex < length) {
        rightElem = this.values[rightIndex]
        if (
          (swapIndex === null && rightElem > element) ||
          (swapIndex !== null && rightElem > leftElem)
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

  // My solution
  bubbleDown2 () {
    let index = 0
    let element = this.values[0]

    while (true) {
      let leftIndex = 2 * index + 1
      let rightIndex = 2 * index + 2

      let isRightLargerThanElement =
        element < (this.values[rightIndex] || -Infinity)
      let isLeftLargerThanElement =
        element < (this.values[leftIndex] || -Infinity)

      let isLeftLargerThanRight =
        (this.values[leftIndex] || 0) > (this.values[rightIndex] || 0)

      if (isRightLargerThanElement || isLeftLargerThanElement) {
        if (isLeftLargerThanRight) {
          swap(this.values, leftIndex, index)
          index = leftIndex
        } else {
          swap(this.values, rightIndex, index)
          index = rightIndex
        }
      } else {
        break
      }
    }
  }
}

const heap = new MaxBinaryHeap()

;[33, 12, 27, 18, 39, 55, -4, -55].forEach(el => heap.insert(el))

console.log(heap.values)

heap.remove()

console.log(heap.values)
