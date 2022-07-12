const express = require('express')



const router = express.Router()
const {createUser} = require('../controller/user')
const{validateUserSignUp,userValidation}=require('../middlewares/validation/user')


router.post('/register',validateUserSignUp,userValidation,createUser)

module.exports = router  