const mongoose = require('mongoose');
function date(){
    let actualdate = new Date();
    let day = actualdate.getDay()+5;
    if(day<10){
        day =`0${actualdate.getDay()+5}`
    }
    let month = actualdate.getMonth()+1;
    if(month<10){
        month = `0${actualdate.getMonth()+1}`
    }
    let year = actualdate.getFullYear();
    return `${day}/${month}/${year}`;
}

const userSchema = mongoose.Schema({

    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    username:{
      type:String,
      required:true
    },
    facebookID:{
        type:String,
        required:false
    },
    googleID:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:false,
        default:date()
    }
})
module.exports= mongoose.model('User',userSchema);