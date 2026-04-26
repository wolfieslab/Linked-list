class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export class Linkedlist {
  constructor() {
    this.headNode = null;
    this._size = 0;
  }

  _getNode(index) {
    if(index < 0 || index >= this._size) return null;

    let current = this.headNode;
    for(let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      const tail = this._getNode(this._size - 1);
      tail.nextNode = newNode;
    }
    this._size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
    this._size++;
  }

  head() {
    return this.headNode?.value;
  }

  tail() {
    return this._getNode(this._size - 1)?.value;
  }

  at(index) {
    return this._getNode(index)?.value;
  }

  pop() {
    if(!this.headNode) return undefined;
    const val = this.headNode.value;
    this.headNode = this.headNode.nextNode;
    this._size--;
    return val;
  }

  contains(value) {
    let current = this.headNode;
    while(current) {
      if(current.value === value) return true
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.headNode;
    let i = 0;
    while(current) {
      if(current.value === value) return i;
      current = current.nextNode;
      i++;
    }
    return -1;
  }

  insertAt(index, ...values) {
    if(index < 0 || index > this._size) return;

    if(index === 0) {
      for(let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }

    let prev = this._getNode(index - 1);
    let next = prev.nextNode;     

    for(let value of values) {
      const newNode = new Node(value);
      prev.nextNode = newNode;
      prev = newNode;
      this._size++;
    }

    prev.nextNode = next;
  }

  removeAt(index) {
    if(index < 0 || index > this._size) throw new Error("Range Error");
    if(!this.headNode) throw new Error("Linked list is empty");

    if(index === 0) {      
      return this.pop();
    }

    const prev = this._getNode(index - 1);

    if(!prev || !prev.nextNode) throw new Error("Range Error");

    const removed = prev.nextNode;
    prev.nextNode = removed.nextNode;
    this._size--;
  }

  size() {
    return this._size;  
  }

  toString() {
    let current = this.headNode;
    let result = "";

    while (current) {
      result += `${current.value}  -> `
      current = current.nextNode;
    }

    return result += "null";
  }
}
