var linkedList = require('./singlyLinkedList');

var myList = new linkedList;
myList.push(3);
myList.push('hello');
myList.push(47);
console.log(myList);
myList.set(0, 'hamburger');
myList.set(1, 'hamburger');
myList.set(2, 'hamburger');
console.log('*************')
console.log(myList);
console.log('*************')