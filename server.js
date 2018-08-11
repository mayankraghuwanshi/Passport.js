const express = require('express');
const server  = express();
server.use(express.json());
server.use(express.urlencoded({
    extend:true
}))
server.use('/check',(req , res )=>{
    res.send(`<h1>Nice to See you :)</h1>`)
})
server.listen(1221,()=>{
    console.log('http://localhost:1221/check')
})