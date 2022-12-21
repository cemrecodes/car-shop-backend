require("dotenv").config();
const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
// const dotenv = require('dotenv');

// // get config vars
// dotenv.config();

// access config var
// process.env.TOKEN_SECRET;
const customerRouter = require('./api/customers/customer.router');
const companyRouter = require('./api/company/company.router');
const vehicleRouter = require('./api/vehicle/vehicle.router');
const purchaseRouter = require('./api/purchase/purchase.router');


app.use(express.json());
app.use("/api/customers",customerRouter);
app.use("/api/company",companyRouter);
app.use("/api/vehicle",vehicleRouter);
app.use("/api/purchase",purchaseRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("listening", process.env.APP_PORT);
})