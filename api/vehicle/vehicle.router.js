const {createVehicle,deleteVehicle,getVehicleByID,getVehicles } = require("./vehicle.controller");
const router = require("express").Router();

router.post("/", createVehicle);
router.get("/", getVehicles);
router.get("/:id", getVehicleByID);
// router.patch("/", checkToken, updateCustomer);
router.delete("/",  deleteVehicle);
module.exports = router;