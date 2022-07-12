const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },
});
userSchema.pre("save", function (next) {
  if (this.isModified("motDePasse")) {
    bcrypt.hash(this.motDePasse, 8, (err, hash) => {
      if (err) return next(err);
      this.motDePasse = hash;
      next();
    });
  }
});
// userSchema.methods.comparePassword= async function(motDePasse){
//   if(!motDePasse) throw new Error('mot de passe missing')
//   try{
//     const result=await bcrypt.compare(motDePasse,this.motDePasse)
//     return result
//   }catch (error){
//    console.log('error while comparing password',error);
//   }
// }

userSchema.statics.existEmail = async function (email) {
  if (!email) throw new Error("Invalid email");
  try {
    const user = await this.findOne({ email });
    if (user) return false;
    return true;
  } catch (error) {
    console.log("error inside existEmail", error);
    return false;
  }
};

module.exports = mongoose.model("User", userSchema);
