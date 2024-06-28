const handle = {
    get(target, name){
        return name in target ? target[name] : 42;
    }
}

const hello = {
    a: 1,
    b: 100,
    c: undefined

}

const p = new Proxy(hello, handle);

console.log(p.a, p.b, p.c, p.f); // 1 100 undefined 42
console.log("f" in p );