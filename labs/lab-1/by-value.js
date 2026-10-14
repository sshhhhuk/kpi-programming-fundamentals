'use strict'


let a = 5;

const inc = (a) => {
    return ++a;
}

let b = inc(a);

console.dir({a, b});