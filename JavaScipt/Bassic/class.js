class People{

    constructor(id, firstName, lastName , dob){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); // date of birth
    }

    getYearsOfBirth(){
        return this.dob.getFullYear();
    }
    
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const people = new People(1, "Lam", "Dai", "07-07-2003"); 

console.log(people.getFullName());   