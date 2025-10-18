const express = require('express')
const router = express.Router();
const {body} = require('express-validator');
const UserController = require('../Controllers/userController');

router.post('/register',[

],UserController.registerUser)

module.exports = router;
