const {createReadStream} = require('fs')
console.log('start')
const stream = createReadStream('./content/big.txt',{
    encoding:'utf8',
    highWaterMark:90000
});

stream.on('data',(chunk)=>{
    console.log(chunk.length)
})
console.log('next task')