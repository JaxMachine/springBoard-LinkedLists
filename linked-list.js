/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("invalid index");
    }
    let currentNode = this.head;
    let count = 0;

    while (currentNode != null && count != idx) {
      count += 1;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid Index");
    }

    let currentNode = this.head;
    let count = 0;

    while (currentNode != null && count != idx) {
      count += 1;
      currentNode = currentNode.next;
    }

    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid Index");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push;

    let currentNode = this.head;
    let previousNode = null;
    let count = 0;

    while (currentNode != null && count != idx) {
      count += 1;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    let newNode = new Node(val);
    newNode.next = previousNode.next;
    previousNode.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //Removed Head
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }
    let currentNode = this.head;
    let previousNode = null;
    let count = 0;

    while (currentNode != null && count != idx) {
      count += 1;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    //Remove Tail
    if (idx === this.length - 1) {
      let val = previousNode.next.val;
      previousNode.next = null;
      this.tail = previousNode;
      this.length -= 1;
      return val;
    }

    let val = previousNode.next.val;
    previousNode.next = previousNode.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let currentNode = this.head;

    while (currentNode) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
