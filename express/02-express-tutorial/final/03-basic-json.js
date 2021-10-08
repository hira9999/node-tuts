const express = require('express');
const path = require('path')
const app = express();
const port = 5000;
const { products } = require('./data')

app.get('/',(req,res)=>{
    res.json(products)
})

app.listen(port, ()=>{`Server is listening on ${port} port ...`})