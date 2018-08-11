const mongoose = require('mongoose');
const USER = require('../models/user')
const route = require('express').Router();
mongoose.connect('mongodb://localhost:27017/blog');

route.get('/',(req , res)=>{
    console.log("trying to get data")
USER.find({}).then((data)=>{
    res.send(data)
}).catch((err)=>{
    res.send({error:err})
})
})
route.post('/',( req , res )=>{
    const user = new USER({
        first_name : req.body.first_name,
         last_name : req.body.last_name,
          username : req.body.username,
          password : req.body.password
    });
    user.save().then((data)=>{
        res.redirect('/user')
    }).catch((err)=>{
        res.send({error:err})
    })

})

module.exports = route;
