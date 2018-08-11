const express = require('express');
const mongoose = require('mongoose');
const server  = express();
server.use(express.json());
server.use(express.urlencoded({
    extend:true
}))

mongoose.connect('mongodb://localhost:27017/blog');


server.use('/user' , require('./Routes/user'))
server.use('/post',require('./Routes/post'))
server.listen(1221,()=>{
    console.log('http://localhost:1221/check')
})