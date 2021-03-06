const express = require('express')
const router = express.Router()

const UserController = require('../controller/userController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.post('/googlelogin', UserController.googleLogin)

module.exports = router