var burgers= require("../models/burger")

function burgers_controllers(app){

     app.get("/",function(req,res){
           burgers.selectAll(function(data){
               
           })
     })

}

module.exports= burgers_controllers