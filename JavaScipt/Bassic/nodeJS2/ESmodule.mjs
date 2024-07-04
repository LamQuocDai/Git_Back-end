import {Person, sayHello} from './ESmoduleUtils.mjs';

const dai = new Person('Dai', 30);
console.log(dai);
console.log(dai.getAge());
console.log(sayHello());