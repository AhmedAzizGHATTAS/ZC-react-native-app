const express = require('express')



const router = express.Router()
const {createUser, userSignIn} = require('../controller/user')
const{validateUserSignUp,userValidation,validateUserSignIn}=require('../middlewares/validation/user')


router.post('/register',validateUserSignUp,userValidation,createUser)

router.post('/sign-in',validateUserSignIn,userSignIn,userValidation)
module.exports = router  