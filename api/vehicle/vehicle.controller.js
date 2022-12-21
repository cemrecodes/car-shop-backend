const {create,getVehicles,getVehicleByID,deleteVehicle, getOurVehicles} = require('./vehicle.service');
 
module.exports={
    createVehicle : (req, res) => {
        const body = req.body;
        create(body,(err, results) => {
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

    getVehicleByID: (req, res) => {
        console.log("HADİSENE ARTIK",req.params)
        const id = req.params.id;
        console.log(id)
        getVehicleByID(id,(err,results) => {
            console.log(id);
            if (err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "Kayıt bulunamadı"
                });
            }
            return res.json({
                success:1,
                data: results[0]
            });
        });
    }, 
    getVehicles: (req, res) => {
        getVehicles((err, results) => {
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
    getOurVehicles: (req, res) => {
        console.log("11111111111    ")
        getOurVehicles((err, results) => {
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
    deleteVehicle: (req, res) => {
        console.log("DELTE")
        const data = req.body;
        console.log("DELETE",req.body)
    
        deleteVehicle(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                success: 0,
                message: "Bulunamadi"
            });
        }
        
            else
            return res.json({
                success: 1,
                message: "silindi"
            });
        });
    }}