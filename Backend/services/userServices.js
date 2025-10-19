const userModel = require('../models/userSchema');

module.exports.createUser = async({
    firstName,email,password
}) =>{
    if(!firstName,!email,!password){
        throw new Error("All fields are required");
        
    }
}