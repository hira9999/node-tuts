const EventEmitter = require('events');

const customEmiiter = new EventEmitter()

customEmiiter.on('response',()=>{
    console.log(`data recieved`)
})
customEmiiter.on('response',()=>{
    console.log(`some other logic here `)
})

customEmiiter.emit('response')