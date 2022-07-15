const { check, validationResult } = require("express-validator");

exports.validateUserSignUp = [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("nom vide")
    .isString()
    .withMessage("doit être un nom valide")
    .isLength({ min: 3, max: 20 })
    .withMessage("le nom doit comporter entre 3 et 20 caractères"),
  check("email").normalizeEmail().isEmail().withMessage("email non valide"),
  check("motDePasse")
    .trim()
    .not()
    .isEmpty()
    .withMessage("mot de passe vide")
    .isLength({ min: 3, max: 20 })
    .withMessage("le mot de passe doit comporter entre 3 et 20 caractères"),
];

exports.userValidation = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();
  const error = result[0].msg;
  res.json({ success: false, message: error });
};

exports.validateUserSignIn = [
  check("email").trim().isEmail().withMessage("email / password required !"),
  check("motDePasse")
    .trim()
    .not()
    .isEmpty()
    .withMessage("email / password required !")
];
