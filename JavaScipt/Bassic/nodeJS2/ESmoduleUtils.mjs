export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

export function sayHello() {
    console.log('Hello');
}