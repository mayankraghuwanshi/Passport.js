const route = require('express').Router();
 route.get('/',(req , res)=>{
     res.send('post route is working')
 })


module.exports = route;