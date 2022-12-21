const pool = require("../../config/database");


module.exports = {
createBill : (data,callBack) => {
    console.log("data")
    
    pool.query(
        'insert into Purchase_Info (Customer_ID,Vehicle_ID,Purchase_Date,Price) values( ?, ?, ?, ?)', 
    [
        data.Customer_ID,
        data.Vehicle_ID,
        data.Purchase_Date,
        data.Price
        
    ], 
    (error,results,fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
getBills : callBack => {
    pool.query('select * from Purchase_Info ',
    [],
    (err, results,fields) =>{
        if(err) {
            callBack(err);

        }
        return callBack(null,results);
    }
    
    );
}
}