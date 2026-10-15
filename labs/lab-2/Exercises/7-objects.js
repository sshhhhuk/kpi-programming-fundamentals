'use strict';

const fn = () => {
  const obj1 = { name: 'Vasya' };

  let obj2 = { name: 'Mykola' };

  obj1.name = 'Zhenya';
  obj2.name = 'Sasha';

  // obj1 = { name: 'Masha' };
  // Error because declaration with "const" forbids to reassign variable

  obj2 = { name: 'Sonya' };

};

module.exports = { fn };
