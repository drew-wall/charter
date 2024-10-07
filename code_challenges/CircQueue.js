class CircQueue {
  constructor(initqueue) {
    this.queue = initqueue || []
  }
  enqueue(val) {
    this.queue.push(val)
    return this.queue
  }
  dequeue() {
    if (this.size()) {
      const item = this.queue.shift()
      this.queue.push(item)
      return item
    }
  }
  size() {
    return this.queue.length
  }
  getQueue() {
    return this.queue
  }
}

const cqueue = new CircQueue([1,2,3,4,5])
console.log(cqueue.size())
console.log(cqueue.enqueue(6))
console.log(cqueue.enqueue(7))
console.log(cqueue.dequeue())
console.log(cqueue.dequeue())
console.log(cqueue.getQueue())
console.log(cqueue.size())
