// basic hash function
function simpleHash (key, arrayLen) {
  let total = 0
  for (let char of key) {
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen
  }
  return total
}

// slightly better hash function
function betterHash (key, arrayLen) {
  const PRIME = 31
  let total = 0
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * PRIME + value) % arrayLen
  }
  return total
}
