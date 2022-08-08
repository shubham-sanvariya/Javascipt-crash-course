
class person {
    constructor(firstname,lastname,dob)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getfullname()
    {
        return `${this.firstname} ${this.lastname}`;
    }

}

const person1 = new person('ronit', 'sanvariya', '09-28-2003');
const person2 = new person('Mary', 'sanvariya', '08-09-2013');
console.log(person1.getBirthYear());
console.log(person2.getfullname());