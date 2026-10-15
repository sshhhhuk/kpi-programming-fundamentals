'use strict';

const arr = [1, '626', true, 'bye', 32, false, 'John', -21];


const collection = {};

for (const elements of arr) {
  const type = typeof elements;
  if (collection[type] === undefined) {
    collection[type] = 0;
  }
  collection[type]++;
}

console.dir(collection);
