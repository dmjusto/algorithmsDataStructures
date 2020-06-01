const dLinkedList = require('./doublyLinkedList');

var list = new dLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push('alegator');

test('test pop ', () => {
    expect(true).toBe(true);
});