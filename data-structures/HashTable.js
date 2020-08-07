class HashTable {
  constructor (size = 53) {
    this.keyMap = new Array(size)
  }

  _hash (key) {
    const PRIME = 31
    let total = 0

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = Math.abs(char.charCodeAt(0) - 96)
      total = (total * PRIME + value) % this.keyMap.length
    }

    return total
  }

  // Does not handle duplicate keys in any way
  set (key, val) {
    const hash = this._hash(key)

    if (!this.keyMap[hash]) {
      this.keyMap[hash] = []
    }
    this.keyMap[hash].push([key, val])
  }

  get (key) {
    const hash = this._hash(key)
    if (!this.keyMap[hash]) {
      return undefined
    }
    return this.keyMap[hash].find(([thisKey, thisVal]) => thisKey === key)[1]
  }

  keys () {
    const keysArray = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach(([key, _]) => {
          if (!keysArray.includes(key)) {
            keysArray.push(key)
          }
        })
      }
    }

    return keysArray
  }

  values () {
    const valuesArray = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach(([_, value]) => {
          if (!valuesArray.includes(value)) {
            valuesArray.push(value)
          }
        })
      }
    }

    return valuesArray
  }
}

const h = new HashTable()

h.set('darkblue', '#00008b')
h.set('salmon', '#fa8072')
h.set('white', '#ffffff')
h.set('white', '#ffffff')
h.set('black', '#000000')
h.set('black', '#000000')
h.set('has colors', true)
h.set('exists', true)

console.log(h.get('salmon'))
console.log(h.get('black'))
console.log(h.get('pink'))
console.log(h.get('has colors'))

console.log(h.keys())
console.log(h.values())
