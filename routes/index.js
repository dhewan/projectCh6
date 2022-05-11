var express = require('express');
var router = express.Router();

router.use("/user", require('./users'));
router.use("/barang", require('./barang'));
module.exports = router;
