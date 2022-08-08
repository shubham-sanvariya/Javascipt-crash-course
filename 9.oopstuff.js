// constructor function
function person (firstname,lastname,dob)
{

    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
   
// prototype is a pretier way to write functions
    person.prototype.getBirthYear = function()
    {
        return this.dob.getFullYear();
    }

    person.prototype.getfullname = function()
    {
        return `${this.firstname} ${this.lastname}`;
    }

}

// Instantiate object 
const person1 = new person('ronit','sanvariya','09-28-2003');
const person2 = new person('Mary','sanvariya','08-09-2013');
console.log(person1.getBirthYear());
console.log(person2.getfullname());
 




