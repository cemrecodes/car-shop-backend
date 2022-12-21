const pool = require("../../config/database");


module.exports = {
create : (data,callBack) => {
    
    pool.query(
        'insert into Vehicle (Company_ID,Price,Brand,Model,Year,Fuel_ID,KM,Color,Description,Image_Link) values( ?, ?, ?, ?, ?, ?, ?, ? ,?, ?)', 
    [
        data.Company_ID,
        data.Price,
        data.Brand,
        data.Model,
        data.Year,
        data.Fuel_ID,
        data.KM,
        data.Color,
        data.Description,
        data.Image_Link
    ], 
    (error,results,fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
getOurVehicles : callBack => {
    console.log("here")
    pool.query('SELECT Vehicle_ID,Name,Price,Brand,Model,Year,Type,KM,Color,Description,Image_Link FROM Vehicle LEFT JOIN Company ON Vehicle.Company_ID = Company.Company_ID LEFT JOIN FuelType ON Vehicle.Fuel_ID = FuelType.Fuel_ID',
    (err, results,fields) =>{
        if(err) {
            callBack(err);
       }
        return callBack(null,results);
    }
    
    );
},
getVehicles : callBack => {
    pool.query('select * from Vehicle ',
    [],
    (err, results,fields) =>{
        if(err) {
            callBack(err);

        }
        return callBack(null,results);
    }
    
    );
},
getVehicleByID :(ID,callBack) =>{
    pool.query('SELECT Vehicle_ID,Name,Price,Brand,Model,Year,Type,KM,Color,Description,Image_Link,Name_Surname FROM Vehicle LEFT JOIN Company ON Vehicle.Company_ID = Company.Company_ID LEFT JOIN FuelType ON Vehicle.Fuel_ID = FuelType.Fuel_ID LEFT JOIN Customer ON Company.Customer_ID = Customer.Customer_ID where Vehicle_ID =  ?',
    [ID],
    (error, results,fields) =>{
        console.log(results)
        console.log("ID: " + ID );
        if(error) {
            callBack(error);
        }
        
        return callBack(null,results);
    }
    );
},  

// updateVehicle :(data,callBack) => {
//     pool.query(
//        'update Customer set Email= ? , set Password= ? where id= ?' ,
//        [
//            data.Email,
//            data.Password
//        ], 
//        (error, results,fields) => {
//            if (error) {
//                callBack(error);
//            }
//            return callBack(null, results[0]);
//        }
//     );
// },
deleteVehicle : (data, callBack) => {
    pool.query(
        'delete from Vehicle where Vehicle_ID = ?',
        [data.Vehicle_ID],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
}

};