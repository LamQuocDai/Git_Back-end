function map(f,a){
    const result = new Array(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = f(a[i]);
    }
    return result;
}
const power = x => x*x;
const factorial = n => n < 2 ? 1 : n*factorial(n-1);
const numbers = [1, 2, 3, 4, 5];
console.log(map(factorial, numbers)); // [1, 8, 27, 64, 125] 