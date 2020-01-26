var connection=require("./connection")

var orm = {
    selectAll:function(tableName, cb){
         connection.query("select * from ?? ",tableName, function(err,data){
             cb(data)
         })
    }
}

module.exports=orm;