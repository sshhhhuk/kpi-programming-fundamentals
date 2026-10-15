'use strict';

const iface =
{
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

const methods = (iface) => {

  const arr = [];

  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      const amount = iface[key].length;
      arr.push([key, amount]);
    }
  }
  return arr;
};

console.log(methods(iface));
