const {readFile, writeFile} = require('fs')
console.log('start');

//READ
readFile('./content/first.txt', 'utf-8', (err, result) =>{
    if (err){
        console.log(err)
        return 
    }
    // console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        writeFile(
            './content/result-Async.txt', 
            `Result Async: ${first}, ${second}`,
            (err,result) => {
                if (err){
                    console.log(err,);
                    return
                }
                console.log('done with this');
            })
    })
})

console.log('starting next one');

