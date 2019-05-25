'use strict';

const LinkedList = require('../linkedList');

describe('Testing with Linkedlist ', () => {

  it('should create a linked list. Head pointing to null', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('after adding a new node with value of 5, head should not be null. Head.value should be equals to 5.', () => {
    let list = new LinkedList();
    list.insert(5);
    expect(list.head.value).toEqual(5);
  });

  it('should create a new node after the first. The first node.next should point towards the second and the second.next should point towards null', () => {
    let list = new LinkedList();
    list.insert(5);
    list.append(6);
    expect(list.head.next.value).toEqual(6);
    expect(list.head.next.next).toEqual(null);
  });

  it('should return true or false based on if the value is included in the list', () => {
    let list = new LinkedList();
    list.insert(5);
    list.append(6);
    list.append(7);
    expect(list.includes(4)).toEqual(false);
    expect(list.includes(5)).toEqual(true);
  });



});
