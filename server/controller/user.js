const User = require("../models/user");
exports.createUser = async (req, res) => {
  const { name, email, motDePasse } = req.body;
  const isNewUser = await User.existEmail(email);
  if (!isNewUser)
    return res.json({ success: false, message: "ce email est déjà utilisé" });
  const user = await User({
    name,
    email,
    motDePasse,
  });
  await user.save();
  res.json({success:true,user});
};
