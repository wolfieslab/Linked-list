import { Linkedlist } from "./linkedlist.js";


let list = new Linkedlist();

list.append("dog");
list.append("parrot");
list.prepend("cat");
list.prepend("donkey");

console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
console.log(list.at(5));
console.log(list.pop());
console.log(list.contains("dog"));
console.log(list.insertAt(0, "elephant", "tiger"));
console.log(list.insertAt(list.size(), "lion", "fox"));
console.log(list.toString());
console.log(list.size());
console.log(list.removeAt(4));
console.log(list.toString());