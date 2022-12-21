const {createBill,getBills} = require('./purchase.service');

// const { hashSync, genSaltSync, compareSync } = require("bcrypt");
// const { sign } = require("jsonwebtoken");
// const { json } = require('express');
 
module.exports={
    createBill : (req, res) => {
        console.log("burda")
        const body = req.body;
        createBill(body,(err, results) => {
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

    getBills: (req, res) => {
        getBills((err, results) => {
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
};