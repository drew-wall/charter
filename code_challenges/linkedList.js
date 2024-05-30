class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  
  addFirst(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }
  
  addLast(data) {
    const newNode = new Node(data)
    
    if (!this.head) {
      this.head = newNode
      return
    }
    
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }
  
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error('Invalid Index')
      return
    }
    
    const newNode = new Node(data)
    
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
      return  
    }
    
    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      current = current.next
    }
    newNode.next = current.next
    current.next = newNode
  }
  
  removeTop() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }
  
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error('Invalid Index')
      return
    }
    
    if (index === 0) {
      this.head = this.head.next
      return
    }
    
    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      current = current.next
    }
    
    if (current.next) {
      current.next = current.next.next
    }
  }
  
  removeLast() {
    if (!this.head) {
      return
    }
    
    let current = this.head
    while (current.next.next) {  
      current = current.next
    }
    current.next = null
  }

  replaceAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error('Invalid Index')
      return
    }
    
    if (index === 0) {
      this.head.data = data
      return
    }
    
    let current = this.head
    for (let i = 0; i < index - 1 ; i++) {
      current = current.next
    }
    if (current) {
      current.next.data = data
    }
  }
  
  size() {
    let count = 0
    let current = this.head
    while (current) {
      count += 1
      current = current.next
    }
    return count
  }
  
  print() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const linkedlist = new LinkedList()

linkedlist.addFirst('First')
linkedlist.addLast('second')
linkedlist.addLast('third')
linkedlist.addAt(2, 'add at 2')
linkedlist.addAt(2, 'add at 2')
linkedlist.addAt(0, 'add at 0')
linkedlist.removeAt(4)
//linkedlist.removeLast()
linkedlist.print()
console.log('size', linkedlist.size())