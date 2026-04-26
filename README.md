# LinkedList Implementation (JavaScript)

A simple implementation of a **singly linked list** in JavaScript with common operations like insertion, deletion, traversal, and search.

## 📌 Features

* Append and prepend nodes
* Insert at any index
* Remove nodes by index
* Access elements by index
* Search for values
* Track list size (O(1))
* Convert list to string for visualization


## 🧱 Structure

```js
class Node {
  value
  nextNode
}

class LinkedList {
  headNode
  _size
}
```


## 🚀 Usage

### Import

```js
import { LinkedList } from "./LinkedList.js";
```

### Example

```js
const list = new LinkedList();

list.append("dog");
list.append("parrot");
list.prepend("cat");
list.prepend("donkey");

console.log(list.toString());
// donkey -> cat -> dog -> parrot -> null

list.insertAt(0, "elephant", "tiger");
console.log(list.toString());
// elephant -> tiger -> donkey -> cat -> dog -> parrot -> null

list.removeAt(2);
console.log(list.toString());
// elephant -> tiger -> cat -> dog -> parrot -> null
```


## 📚 API

### append(value)

Adds a node to the end of the list.

### prepend(value)

Adds a node to the beginning of the list.

### insertAt(index, ...values)

Inserts one or more values starting at a given index.

### removeAt(index)

Removes a node at the given index and returns its value.

### at(index)

Returns the value at the specified index.

### head()

Returns the first element.

### tail()

Returns the last element.

### pop()

Removes and returns the first element.

### contains(value)

Returns `true` if value exists in the list.

### findIndex(value)

Returns index of value, or `-1` if not found.

### size()

Returns the number of nodes (O(1)).

### toString()

Returns a string representation:

```
value1 -> value2 -> value3 -> null
```


## ⚠️ Edge Cases Handled

* Invalid index (throws error)
* Empty list operations
* Removing head and tail nodes
* Multiple inserts at same index

## 🧪 Testing

Basic usage tests are included in `main.js` using `console.log`.

Example:

```js
console.log(list.toString());
console.log(list.size());
console.log(list.contains("dog"));
```


## 💡 Future Improvements

* Add `tailNode` for O(1) append
* Make the list iterable (`for...of`)
* Add reverse method
* Add unit tests (Jest)

