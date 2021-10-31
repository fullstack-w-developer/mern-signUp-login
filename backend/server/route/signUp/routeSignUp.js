const express = require("express");
const controlerSignUp = require("./../../controler/signUp/controlerSignUp");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("hello word");
});

/**
 * @description create user as signUp
 * @method POST
 */
route.post("/signUp", controlerSignUp.create);

/**
 * @description infoUser
 * @method GET
 */

route.get("/infoUser", controlerSignUp.infoUser);

/**
 * @description login user
 * @method POST
 */

route.post("/login", controlerSignUp.login);
module.exports = route;
