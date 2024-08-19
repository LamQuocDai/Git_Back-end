module.exports.Person =  class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }
};
module.exports.sayHello = function sayHello() {
    console.log('Hello');
}

exports.sayGoodbye = () => {
    console.log('Goodbye');
}
