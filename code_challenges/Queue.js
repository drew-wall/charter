class Queue {
  constructor(initqueue) {
    this.queue = initqueue || []
  }
  enqueue(val) {
    this.queue.push(val)
    return this.queue
  }
  dequeue() {
    if (this.size()) {
      return this.queue.shift()
    }
  }
  size() {
    return this.queue.length
  }
  getQueue() {
    return this.queue
  }
}

const queue = new Queue([1,2,3,4,5])
console.log(queue.size())
console.log(queue.enqueue(6))
console.log(queue.enqueue(7))
console.log(queue.dequeue())
console.log(queue.getQueue())
console.log(queue.size())
