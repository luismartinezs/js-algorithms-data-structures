const areThereDuplicates = (...args) => {
  if (!args.length) return false
  const freqCounter = {}
  for (let i = 0; i < args.length; i++) {
    freqCounter[args[i]] = (freqCounter[args[i]] || 0) + 1
    if (freqCounter[args[i]] > 1) return true
  }
  return false
}

export default areThereDuplicates
