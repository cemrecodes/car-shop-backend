const {createCompany,deleteCompany,getCompanies,getCompanyByID} = require("./company.controller");
const router = require("express").Router();

router.post("/", createCompany);
router.get("/", getCompanies);
router.get("/:id", getCompanyByID);
// router.patch("/", checkToken, updateCustomer);
router.delete("/",  deleteCompany);
// router.post("/login" ,login);

module.exports = router;