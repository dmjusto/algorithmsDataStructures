var linkedList = require('./singlyLinkedList');

var myList = new linkedList;
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
myList.print();
console.log('***************')
myList.reverse();
myList.print();