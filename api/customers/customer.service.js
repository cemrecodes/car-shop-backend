const pool = require("../../config/database");


module.exports = {
create : (data,callBack) => {
    
    pool.query(
        'insert into Customer (Name_Surname,Address,Email,Password,tel_no) values( ?, ?, ?, ?, ?)', 
    [
        data.Name_Surname,
        data.Address,
        data.Email,
        data.Password,
        data.tel_no
    ], 
    (error,results,fields) => {
        if (error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
getCustomers : callBack => {
    pool.query('select Email , Password from Customer ',
    [],
    (err, results,fields) =>{
        if(err) {
            callBack(err);

        }
        return callBack(null,results);
    }
    
    );
},
getCustomerIDByEmail :(email,callBack) =>{
    pool.query('select Customer_ID from Customer where Email =  ?',
    [email],
    (error, results,fields) =>{
        console.log("db email: " + email );
        if(error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
getCustomerByEmail :(email,callBack) =>{
    pool.query('select Email,Password from Customer where Email =  ?',
    [email],
    (error, results,fields) =>{
        console.log("db email: " + email );
        if(error) {
            callBack(error);
        }
        return callBack(null,results);
    }
    );
},
getCustomerByCustomerEmail: (email, callBack) => {
    pool.query(
      `select  Email,Password from Customer where Email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        console.log(email);
        return callBack(null, results);
      }
    );
  },
  
updateCustomer :(data,callBack) => {
    pool.query(
       'update Customer set Email= ? , set Password= ? where id= ?' ,
       [
           data.Email,
           data.Password
       ], 
       (error, results,fields) => {
           if (error) {
               callBack(error);
           }
           return callBack(null, results[0]);
       }
    );
},
deleteCustomer : (data, callBack) => {
    pool.query(
        'delete from Customer where Email = ?',
        [data.Email],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
}

};