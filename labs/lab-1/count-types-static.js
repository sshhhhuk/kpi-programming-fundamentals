'use strict';

const arr = [1, '626', true, 'bye', 32, false, 'John', -21];

const collection = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (const elements of arr) {
  const type = typeof elements;
  collection[type]++;
};

console.dir(collection);
