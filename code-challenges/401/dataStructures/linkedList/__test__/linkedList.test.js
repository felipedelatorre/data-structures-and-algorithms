'use strict';

const LinkedList = require('../linkedList');

describe('Testing with Linkedlist ', () => {

  let list;

  beforeEach(() => {
    list = new LinkedList();
  });


  describe('Instance of LinkedList', () => {

    it('should create a linked list. Head pointing to null', () => {
      expect(list.head).toEqual(null);
    });

  });

  describe('insert()', () => {

    it('after adding a new node with value of 5, head should not be null. Head.value should be equals to 5.', () => {
      list.insert(5);
      expect(list.head.value).toEqual(5);
    });

    it('should add a new value to the head and push old values to the end of the list', () => {
      list.insert(5);
      list.insert(10);
      list.insert(30);

      expect(list.head.value).toEqual(30);
      expect(list.head.next.next.value).toEqual(5);
    });
  });

  describe('append()', () => {

    it('Can successfully add a node to the end of the linked list', () => {
      list.insert(5);
      list.append(6);
      expect(list.head.next.value).toEqual(6);
      expect(list.head.next.next).toEqual(null);
    });

    it('Can successfully add multiple nodes to the end of a linked list', () => {
      list.insert(5);
      list.append(6);
      list.append(7);
      expect(list.includes(4)).toEqual(false);
      expect(list.includes(5)).toEqual(true);
    });

  });


  describe('insertBefore()', () => {
    it('Can successfully insert a node before a node located in the middle of a linked list', () => {
      list.insert(1);
      list.append(2);
      list.append(4);
      list.append(5);
      list.insertBefore(4, 3);

      expect(list.includes(3)).toEqual(true);
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
      list.insert(1);
      list.append(2);
      list.append(4);
      list.append(5);
      list.insertBefore(1, 0);

      expect(list.includes(0)).toEqual(true);
    });
  });

  describe('insertAfter()', () => {
    it('Can successfully insert after a node in the middle of the linked list', () => {
      list.insert(1);
      list.append(2);
      list.append(4);
      list.append(5);
      list.insertAfter(2, 3);

      expect(list.includes(3)).toEqual(true);
    });

    it('Can successfully insert a node after the last node of the linked list', () => {
      list.insert(1);
      list.append(2);
      list.append(4);
      list.append(5);
      list.insertAfter(5, 6);

      expect(list.includes(6)).toEqual(true);
    });

  });






});
