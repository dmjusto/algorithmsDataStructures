var linkedList = require('./singlyLinkedList');

var myList = new linkedList;
myList.push(3);
myList.push('hello');
myList.push(47);
console.log(myList);
myList.shift();
myList.shift();
myList.shift();
myList.shift();
console.log('***********')
console.log(myList);