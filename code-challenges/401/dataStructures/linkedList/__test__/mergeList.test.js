'use strict';

const LinkedList = require('../linkedList');
const merge = require('../mergeList');

describe('Funtions outside of the linkedList', () => {

  let listA;
  let listB;
  let listC;

  beforeEach(() => {
    listA = new LinkedList();
    listB = new LinkedList();

  });

  it('instance of new LinkedList() after merging', () => {
    // Arrange

    // Act
    listC = merge(listA, listB);

    // Assert
    expect(listC).toBeInstanceOf(LinkedList);
  });

  it('should contain node values from both lists', () => {
    // Arrange
    listA.insert(1);
    listB.insert(2);

    // Act
    listC = merge(listA, listB);

    // Assert
    expect(listC.includes(1)).toBeTruthy();
    expect(listC.includes(2)).toBeTruthy();
  });

  it('should last node in new list be null', () => {
    // Arrange
    listA.insert(1);
    listB.insert(2);

    // Act
    listC = merge(listA, listB);
    let current = listC.head;
    while(current.next){
      current = current.next;
    }

    // Assert
    expect(current.value).toBe(1);
    expect(current.next).toBeNull();
  });


});
