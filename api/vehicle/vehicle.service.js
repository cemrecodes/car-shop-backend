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
        data.Imgage_Link
    ], 
    (error,results,fields) => {
        if (error) {
            callBack(error);
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
    pool.query('select * from Vehicle where Vehicle_ID =  ?',
    [ID],
    (error, results,fields) =>{
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
        [data.ID],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
}

};