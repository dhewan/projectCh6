var express = require('express');
var router = express.Router();
const user = require("../controller/userController");
const superadmin = require("../middleware/superAdmin");
const auth = require("../middleware/auth");

router.post("/register",superadmin,user.registerAdmin);
router.post("/login", user.login);
router.put("/deleteadmin", user.login);
router.get("/allUser", user.getAllUser);
router.get("/currentuser",auth, user.currentUser);

module.exports = router;
