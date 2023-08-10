const { Router } = require("express");
const {
  createUser,
  loginUser,
  confirmEmail,
} = require("../controllers/users.controller");
const {
  loginUserValidator,
  registerUserValidator,
} = require("../validators/users.validators");
const hasRole = require("../middlewares/role.middleware");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", registerUserValidator, createUser); //

router.post("/login", loginUserValidator, loginUser);

router.post("/confirm-email", confirmEmail);

router.get(
  "/confidential",
  authenticate,
  hasRole("admin"),
  (req, res, next) => {
    res.send("Esto es confidencial");
  }
);

module.exports = router;

