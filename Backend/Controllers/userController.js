const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,"First name must be of 3 characters"]
        },
        firstName:{
            type:String,
            required:true,
            minlength:[3,"First name must be of 3 characters"]
        },
    }
})