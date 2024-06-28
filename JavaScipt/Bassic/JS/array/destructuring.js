const numbers = [1, 2, 3, 4, 5];
// const first = numbers[0];
// const second = numbers[1];
const [first, second, third, ...rest] = numbers;
console.log(first, second, third, rest); // 1 2 3 [4, 5]

// extended
const firstNumbers = [1, 2, 3, 4, 5];
const lastNumbers = [6, 7, 8, 9, 10];
const allNumbers = [...firstNumbers, ...lastNumbers];
console.log(allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

allNumbers.forEach((value) => {
    console.log(value);
});
