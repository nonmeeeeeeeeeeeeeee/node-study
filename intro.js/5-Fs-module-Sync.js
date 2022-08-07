const {readFileSync, writeFileSync} = require('fs')
// console.log('start');

//READ
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

//WRITE
writeFileSync('./content/result-sync.txt', `Result: ${first}, ${second}`,
{flag: 'a'}
)
// console.log('done with this');
// console.log('starting next one');