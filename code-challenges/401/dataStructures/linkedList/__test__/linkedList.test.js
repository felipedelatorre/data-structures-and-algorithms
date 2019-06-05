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

  describe('nthFromEnd()', () => {

    it('Where k is greater than the length of the linked list ', () => {
      let node3 = {value: 3, next: null};
      let node2 = {value: 2, next: node3};
      let node = {value: 1, next: node2};

      list.head = node;


      expect(() => {
        list.nthFromEnd(5);
      }).toThrow();
    });

    it('Where k and the length of the list are the same', () => {
      list.insert(1);

      expect(() => {
        list.nthFromEnd(4);
      }).toThrow();
    });

    it('Where k is not a positive integer', () => {
      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insert(4);

      expect(() => {
        list.nthFromEnd(-5);
      }).toThrow();
    });

    it('Where the linked list is of a size 1', () => {
      list.insert(1);

      expect(() => {
        list.nthFromEnd(2);
      }).toThrow();
      expect(list.nthFromEnd(0)).toEqual(1);
    });

    it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
      let node3 = {value: 3, next: null};
      let node2 = {value: 2, next: node3};
      let node = {value: 1, next: node2};

      list.head = node;

      expect(list.nthFromEnd(1)).toEqual(2);
    });

  });
























});
