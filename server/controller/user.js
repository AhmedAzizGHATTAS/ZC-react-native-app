const User = require("../models/user");
const jwt = require("jsonwebtoken");
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
  res.json({ success: true, user });
};
exports.userSignIn = async (req, res) => {
  const { email, motDePasse } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.json({ success: false, message: "user not found" });

  const isMatch = await user.comparePassword(motDePasse);
  if (!isMatch)
    return res.json({ success: false, message: "check email / mot de passe" });
  const token = jwt.sign({ userId: user._id }, "secretjwt123", {
    expiresIn: "1d",
  });
  res.json({ success: true, user, token });
};
