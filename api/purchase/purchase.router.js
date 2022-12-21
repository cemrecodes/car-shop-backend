const {createBill,getBills} = require("./purchase.controller");
const router = require("express").Router();

router.post("/", createBill);
router.get("/", getBills);

module.exports = router;