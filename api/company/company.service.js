const pool = require("../../config/database");


module.exports = {
createCom : (data,callBack) => {
    console.log("data")
    
    pool.query(
        'insert into Company (Name, Address, Customer_ID, TC) values( ?, ?, ?, ?)', 
    [
        data.Name,
        data.Address,
        data.Customer_ID,
        data.TC
    ], 
    (error,results,fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
getCompanies : callBack => {
    pool.query('select * from Company ',
    [],
    (err, results,fields) =>{
        if(err) {
            callBack(err);

        }
        return callBack(null,results);
    }
    
    );
},
getCompanyByID :(id,callBack) =>{
    pool.query('select * from Company where Company_ID =  ?',
    [id],
    (error, results,fields) =>{
        if(error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
getCompanyIDByName :(name,callBack) =>{
    pool.query('select Company_ID from Company where Name = ?',
    [name],
    (error, results,fields) =>{
        if(error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
// getCustomerByCustomerEmail: (email, callBack) => {
//     pool.query(
//       `select  Email,Password from Customer where Email = ?`,
//       [email],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         console.log(email);
//         return callBack(null, results);
//       }
//     );
//   },
  
// updateCustomer :(data,callBack) => {
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
deleteCompany : (data, callBack) => {
    pool.query(
        'delete from Company where Company_ID = ?',
        [data.Company_ID],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
}

};