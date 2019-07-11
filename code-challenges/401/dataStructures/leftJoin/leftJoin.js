'use strict';

module.exports = (htLeft, htRight) => {

  if( typeof htLeft === Object || typeof htRight === Object ) {
    throw new Error('Params must be instance of hashTables');
  }

  let resultLeft = [];

  htLeft.buckets.forEach(element => {
    let content = [];
    content.push(element.values()[0][0]);

    content.push(element.values()[0][1]);
    content.push(htRight.get(element.values()[0][0]));

    resultLeft.push(content);

  });

  return resultLeft;
};
