class People{

    constructor(id, name, birthday){
        this.id = id;
        this.name = name;
        this.birthday = birthday;   
    }

    sayHello(){
        return "Hello";
    }               
}

const people = new People(1, "John", "1990-01-01"); 

console.log(people.sayHello()); 