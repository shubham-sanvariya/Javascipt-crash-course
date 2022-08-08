const str = "i am your death ";
console.log(str.split(" ").map(item=>item.charAt(0).toUpperCase()+item.slice(1)).join(" "));