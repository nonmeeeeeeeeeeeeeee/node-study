const os = require('os')

// INFO ABOUT CURRENT USER
const user = os.userInfo()

// METHOD RETURN THE SYSTEM UPTIME IN SECONDS
// console.log(`The System uptime is  ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(), 
    totalMem: os.totalmem(),
    freeMem: os.freemem()
} 
console.log(currentOS);

