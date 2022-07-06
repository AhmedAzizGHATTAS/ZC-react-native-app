
const User = require('../models/user')
exports.createUser = async (req,res)=>{
    const {name,email,motDePasse} =req.body
    const user = await User({
        name,
        email,
        motDePasse
    })
    await user.save()
    res.send(user)
  }