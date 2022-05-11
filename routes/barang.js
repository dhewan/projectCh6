var express = require('express');
var router = express.Router();
const barang = require("../controller/barangController");
const auth = require("../middleware/auth");

router.get("/allBarang",barang.getAllBarangs);
router.post("/create",auth , barang.createBarangs);
router.post("/delete",auth , barang.deleteBarangs);
router.put("/update/:id",auth , barang.updateBarangs);

module.exports = router;
