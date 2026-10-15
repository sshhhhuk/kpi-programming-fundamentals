'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, source) => {
  let key = '';

  for (let i = 0; i < length; i++) {
    key += source[Math.floor(Math.random() * source.length)];
  }
  return key;
};

console.log(generateKey(10, characters));
