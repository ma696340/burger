var orm = require("../config/orm")

var burgers={
    selectAll: function(cb){
        orm.selectAll("burgers",function(data){
            cb(data)
        })
    }, 
    create: function(userData, cb){
        orm.create("burgers",["burger_name", "devoured"], userData, function(data){
            cb(data)
        })

    }, 
    update: function(id, cb){
        orm.update("burgers",["devoured", "id"], id, function(data){
            cb(data)
        })
    }
    
  
}

module.exports=burgers