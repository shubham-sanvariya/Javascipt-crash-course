const x = 10;

const color = x > 10 ? 'red' : 'blue';

console.log(color);
const switcher = {
    red:()=>console.log("red"),
    black:()=>console.log("red"),
}

switcher['red']()