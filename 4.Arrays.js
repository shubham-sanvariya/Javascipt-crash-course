// Arrays - variables that hold mutiple values

//  after new key word anything is a consturctor 
// in this case Array is a constructor

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples','oranges','pears'];
fruits.push('mangoes'); // adding at the end 
fruits.unshift('strawberries'); // adding at the 0 index
console.log(fruits); 

// smart split 
console.log(Array.from("abcd"));

const anything = ['apple',1,true,null];
console.log(anything);
console.log(typeof null);
console.log(typeof undefined);