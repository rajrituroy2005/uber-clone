const express = require('express')
const router = express.Router();
const {body} = require('express-validator');
const UserController = require('../Controllers/userController');

router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullName.firstName').isLength({min:3}).withMessage("First name must be 3 characters"),
    body('password').isLength({min:6}).withMessage("Password must be 6 characters")

],UserController.registerUser)

module.exports = router;
