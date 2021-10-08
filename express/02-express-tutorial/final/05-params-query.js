const express = require('express');
const app = express()
const { products } = require('./data');


app.get('/', (req,res)=>{
    res.send(`<h1>home</h1><a href="/api/products">product</a>`)
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const { id, name , image } = product;
        return { id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    const { productID } = req.params;
    const singleProduct = products.find(product=>product.id === Number(productID))
    if(!singleProduct){
        res.status(404).send('PRODUCT DOES NOT EXIST')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/review/:reviewID',(req,res)=>{
    
})

app.get('/api/v1/query',(req,res)=>{
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter(product=>{
           return product.name.startsWith(search);
       })
    } 
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        res.status(200).send('there no result')
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000,()=>{
    console.log('Server is listening 5000 port...');
})