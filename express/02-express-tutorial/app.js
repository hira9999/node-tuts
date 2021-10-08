const express = require('express');
const app = express();
const logger = require('./logger');


app.get('/',logger,(req,res)=>{
    res.send('home')
})

app.listen(5000,()=>{'Server is listening 5000 port'})