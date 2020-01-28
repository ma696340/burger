var connection=require("./connection")

var orm = {
    selectAll:function(tableName, cb){
         connection.query("select * from ?? ",tableName, function(err,data){
             cb(data)
         })
    },
    create:function(tableName, columns, userData, cb){
        
          var burger_Name = userData.burger_name
          var devoured = false

    var statement = connection.query("INSERT INTO ?? (??, ??) values(?, ?)", [tableName, ...columns, burger_Name, devoured], function(err, data){
            cb(data)
        })
        console.log(statement.sql)
    },
    update: function(tableName, columnName, id, cb){
       connection.query("update ?? set ?? = ? where ?? = ? ", [tableName, ...columnName, true, id], function(err, data){
 
        cb(data)

       })
    }
}

module.exports=orm;