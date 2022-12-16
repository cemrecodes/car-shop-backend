const { createCustomer, 
    getCustomerByEmail, 
    getCustomerIDByEmail,
    getCustomers, 
    deleteCustomer, 
    updateCustomer,
    login } = require("./customer.controller");
const { checkToken } = require("../../auth/token_validation");
const router = require("express").Router();

router.post("/", createCustomer);
router.get("/", getCustomers);
router.get("/:email", checkToken, getCustomerByEmail);
router.get("/getID/:email",  getCustomerIDByEmail);
router.patch("/", checkToken, updateCustomer);
router.delete("/",  deleteCustomer);
router.post("/login" ,login);

module.exports = router;