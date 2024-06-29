export class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

export function getName(person){
    return person.name;
}

export function getAge(person){
    return person.age;
}
