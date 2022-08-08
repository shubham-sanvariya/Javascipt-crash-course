const name = 'ronit';
const age = 30;

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String (modern and easy)
console.log(`My name is ${name} and i am ${age}`);

const s = 'hello world';

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
// split can be used seperator in an array 
const a = 'technology, computers, it, code';
console.log(a.split(', '));