const {createCompany,deleteCompany,getCompanyIDByEmail,getCompanyIDByName,getCompanies,getCompanyByID} = require("./company.controller");
const router = require("express").Router();

router.post("/", createCompany);
router.get("/", getCompanies);
router.get("/:id", getCompanyByID);
router.get("/getID/:name", getCompanyIDByName);
router.get("/getCompanyIDs/:email", getCompanyIDByEmail);
// router.patch("/", checkToken, updateCustomer);
router.delete("/",  deleteCompany);
// router.post("/login" ,login);

module.exports = router;