var express = require('express');
var router = express.Router();
const user = require("../controller/userController");


router.post("/register", user.register);
router.post("/login", user.login);
router.get("/allUser", user.getAllUser);

module.exports = router;
