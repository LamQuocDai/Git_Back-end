const url = require('url');
const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

console.log('---------------------------------');

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

console.log('---------------------------------');

// Pathname (file name)
console.log(myUrl.pathname);

//Serialized query 
console.log(myUrl.search);

console.log('---------------------------------');

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
console.log(myUrl.href);

console.log('---------------------------------');

// Loop though params
myUrl.searchParams.forEach((value,name) =>{
    console.log(`${name}: ${value}`);
});
