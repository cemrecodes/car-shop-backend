const {createCom,deleteCompany,getCompanyIDByEmail,getCompanies,getCompanyIDByName,getCompanyByID} = require('./company.service');

// const { hashSync, genSaltSync, compareSync } = require("bcrypt");
// const { sign } = require("jsonwebtoken");
// const { json } = require('express');
 
module.exports={
    createCompany : (req, res) => {
        console.log("burda")
        const body = req.body;
        createCom(body,(err, results) => {
            if (err) {
                console.log("ERROR!\n " + err);
            return res.status(500).json({
               success: 0,
               message: "Connection error"
           })  ;
            }
            return res.status(200).json({
                success:1, 
                data: results
            });
        
        });
    },
    // getCustomerByEmail: (req, res) => {
    //     const email = req.params.Email;
    //     console.log("email"+email);
    //     getCustomerByEmail(email,(err,results) => {
    //         console.log(email);
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         if(!results) {
    //             return res.json({
    //                 success:0,
    //                 message: "kayit bulunamadi"
    //             });
    //         }
    //         return res.json({
    //             success:1,
    //             data: results,
    //         });
    //     });
    // }, 
       getCompanyByID: (req, res) => {
        const id = req.params.Company_ID;
        getCompanyByID(id,(err,results) => {
            console.log(id);
            if (err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "kayit bulunamadi"
                });
            }
            return res.json({
                success:1,
                data: results[0]
            });
        });
    }, 
    getCompanyIDByEmail: (req, res) => {
        const email = req.params.email;
        console.log(req.params);
        getCompanyIDByEmail(email,(err,results) => {
            console.log(email);
            if (err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "kayit bulunamadi"
                });
            }
            return res.json({
                success:1,
                data: results
            });
        });
    }, 
    
      getCompanyByCustomerID: (req, res) => {
        const id = req.params.Customer_ID;
        this.getCompanyByCustomerID(id,(err,results) => {
            console.log(id);
            if (err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "kayit bulunamadi"
                });
            }
            return res.json({
                success:1,
                data: results[0]
            });
        });
    }, 
    getCompanyIDByName: (req, res) => {
        const name = req.params.name;
        console.log("results: "+name);
        getCompanyIDByName(name,(err,results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "kayit bulunamadi"
                });
            }
            return res.json({
                success:1,
                data: results[0]
            });
        });
    }, 
    // getCompanyIDByName: (req, res) => {
    //     console.log(req.params.name)
    //     const name = req.params.name;
    //     console.log("results: "+ name);
    //     getCompanyIDByName(name,(err, results) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }            
    //         return res.json({
    //             success: 1,
    //             data: results[0]
    //         });
    //     });
    // }, 
    getCompanies: (req, res) => {
        getCompanies((err, results) => {
            if (err) {
                console.log(err);
                return;
            }            
            return res.json({
                success: 1,
                data: results
            });
        });
    }, 
    // updateCustomer: (req, res) => {
    //     const body = req.body;
        
    //     updateCustomer(body,(err, results) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }

    //         return res.json({
    //             success: 1,
    //            message : "guncelleme basarili"
    //         });
    //     });
    // }, 
    deleteCompany: (req, res) => {
        const data = req.body;
    
        deleteCompany(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                success: 0,
                message: "Kayit bulunamadi"
            });
        }
            return res.json({
                success: 1,
                message: "Guncelleme basarili"
            });
        });
    },
    // login: (req, res) => {
    //     const body = req.body;
    //     getCustomerByEmail(body.Email, (err, results) => {
    //         if(err){
    //             console.log(err);
    //         }
    //         if(!results){
    //             return res.json({
    //                 success: 0,
    //                 data: "Invalid email or password"
    //             });
    //         }
    //         const result = compareSync(body.Password, results[0].Password);
    //         if(result){
    //            // results.Password = undefined;
    //             const jsontoken = sign({ 
    //                 result: results},
    //                 process.env.KEY,
    //                 {
    //                 expiresIn: "2h"
    //             }
    //             );
    //             return res.json({
    //                 success: 1,
    //                 message: "Login successfully",
    //                 token: jsontoken,
    //                 Headers: {
    //                     "Access-Control-Allow-Origin": "*"
    //                 }
    //             }
    //             );
    //         }
    //         else {
    //             return res.json({
    //                 success: 0,
    //                 data: "Invalid email or password"
    //             });
    //         }
    //     });
    // },


};