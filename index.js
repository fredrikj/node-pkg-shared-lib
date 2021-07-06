const ref = require('ref');
const ffi = require('ffi');

const lib = ffi.Library('./mylib.so', {
  sayHi: [ref.types.int, [ref.types.int]]
});
console.log("I am main");
const output = ref.alloc(ref.types.int);
lib.sayHi(output);
console.log("Bye bye");
