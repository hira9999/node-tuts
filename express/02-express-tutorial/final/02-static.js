const express = require('express')
const path = require('path')
const app = express();
const port = 5000;

app.use(express.static('./public'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
    
// })

app.listen(port, ()=>{
    console.log(`server is listening ${port} port`)
})