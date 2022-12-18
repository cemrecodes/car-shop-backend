const {createVehicle,deleteVehicle,getVehicleByID,getVehicles,getOurVehicles } = require("./vehicle.controller");
const router = require("express").Router();

router.post("/", createVehicle);
router.get("/", getVehicles);
router.get("/ourvehicles/", getOurVehicles)
router.get("/getbyID/:id", getVehicleByID);
// router.patch("/", checkToken, updateCustomer);
router.delete("/",  deleteVehicle);
module.exports = router;