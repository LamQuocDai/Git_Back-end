function makeRangeIterator(start = 0, end = Infinity, step = 1){
    let nextIndex = start;
    let IterationCount = 0;

    const rangeIterator = {
        next(){
            let result;
            if (nextIndex < end){
                result = {value: nextIndex, done : false};
                nextIndex += step;
                IterationCount++;
                return result;
            }
            return {value : IterationCount, done : true};
        },

    };
    return rangeIterator;
}

const iter = makeRangeIterator(1, 10, 2);
let result = iter.next();   
while(!result.done){
    console.log(result.value);
    result = iter.next();
}

console.log("Iterated over sequence of size: ", result.value);

// What is yeild keyword in javascript?
function* foo(index){
    while(index < 3){
        yield index;
        index++;
    }
}
const iter2 = foo(0);

console.log(iter2.next().value);
console.log(iter2.next().value); 
console.log(iter2.next().value);     
// Yeild is the return value for each function call, but it doesn't stop the function from executing. It pauses the function and returns the value to the caller. The function can be resumed where it is paused.        
