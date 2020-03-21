const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const auth = require('../helpers/auth')

router
// Read
.get('/', userController.getUser)
// Create
.post('/', userController.insertUser)
// Login
.post('/login', userController.loginUser);

module.exports = router;