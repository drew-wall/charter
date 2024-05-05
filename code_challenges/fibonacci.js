
const fibonacci = num => {
  let n1 = 0, n2 = 1, next
  const arr = []
  while (num) {
    next = n1 + n2;
    n1 = n2;
    n2 = next;
    num--
    arr.push(n1)
  }
  return arr
}

export default fibonacci