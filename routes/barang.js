var express = require('express');
var router = express.Router();
const barang = require("../controller/barangController");
const auth = require("../middleware/auth");

router.get("/allBarang",barang.getBarangsAvail);
router.post("/create",auth , barang.createBarangs);
router.put("/delete/:id",auth , barang.deleteBarangs);
router.put("/update/:id",auth , barang.updateBarangs);

module.exports = router;
