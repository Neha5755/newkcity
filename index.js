const express= require('express')
const app=express()
const port=process.env.PORT || 40000;
const cors=require("cors");
app.use(cors());
app.get('/',(req,res)  =>{
    res.send('Hello world')
})
app.listen(port,() =>{
    console.log('example app listening on port ${port}')
})