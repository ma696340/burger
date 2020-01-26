var orm = require("../config/orm")

var burgers={
    selectAll: function(cb){
        orm.selectAll("burgers",function(data){
            cb(data)
        })
    }
  
}

module.exports=burgers