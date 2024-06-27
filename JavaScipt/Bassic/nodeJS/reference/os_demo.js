const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch()); // arch stands for architecture

// CPU Core Info
console.log(os.cpus());

// Free memory / Total memory
console.log(`${os.freemem()} / ${os.totalmem()}`);

// Home dir
console.log(os.homedir());  // Directory of the home folder

// Uptime
console.log(os.uptime()); // Time your computer has been running in seconds
