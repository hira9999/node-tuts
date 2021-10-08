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

app.listen(5000,()=>{
    console.log('Server is listening 5000 port...')
})