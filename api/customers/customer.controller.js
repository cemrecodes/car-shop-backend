const {create,getCustomerByEmail,getCustomerByCustomerEmail,getCustomers,deleteCustomer,updateCustomer} = require('./customer.service');

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { json } = require('express');
 
module.exports={
    createCustomer : (req, res) => {
        // flag = true;
        // if( getCustomerByEmail(req.Email).Email != null){
        //     flag = false;
        // }
        const body = req.body;
        const salt = genSaltSync(10);
       // console.log("salt: " + salt);
        body.Password = hashSync(body.Password, salt);
        // if( flag ){
        create(body,(err, results) => {
            if (err) {
                console.log("ERROR!\n " + err);
            return res.status(500).json({
               success: 0,
               message: "connection error"
           })  ;
            }
            return res.status(200).json({
                success:1, 
                data: results
            });
        
        });
    //}

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
      getCustomerByEmail: (req, res) => {
        const email = req.params.email;
        console.log("results: "+email);
        getCustomerByEmail(email,(err,results) => {
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
                data: results[0]
            });
        });
    }, 
    getCustomers: (req, res) => {
        getCustomers((err, results) => {
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
    updateCustomer: (req, res) => {
        const body = req.body;
        
        updateCustomer(body,(err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            return res.json({
                success: 1,
               message : "guncelleme basarili"
            });
        });
    }, deleteCustomer: (req, res) => {
        const data = req.body;
    
        deleteCustomer(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                success: 0,
                message: "kayit bulunamadi"
            });
        }
        

            return res.json({
                success: 1,
                message: "guncelleme basarili"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        console.log(body.Email)
        console.log("pass: " + body.Password)
        getCustomerByEmail(body.Email, (err, results) => {
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
            console.log("body pass: " + body.Password)
            console.log("res pass: " + results[0].Password)
            console.log(body.Password == results[0].Password);
            const result = compareSync(body.Password, results[0].Password);
            console.log(result);
            if(result){
                const jsontoken = sign(
                    { result: results}
                   ,
                    process.env.env_variable,{
                    expiresIn: "2h"
                }
                );
                return res.json({
                    success: 1,
                    message: "Login successfully",
                    token: jsontoken
                }
                );
            }
            else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        });
    },


};