const person = {
    firstname : 'ronit',
    lastname  :'sanvariya',
    age : 19,
    hobbies: ['music','movies','sports'],
    // embaded object example address
    address: {
        street: '50 main st',
        city:  'Boston',
        state: 'MA'
    }
}

// we can add stuff
person.email = 'john@gamil.com';


// console.log(person);

// console.log(person.firstname,person.lastname);

console.log(person.hobbies[1]);

console.log(person.address.city);

// Note that we are not assigning  
// pulling out of the object
// example here we are pulling out firstname and lastname 
// and address - city
// from object person 

const {firstname,lastname,address: {city}} = person;
console.log(city);



