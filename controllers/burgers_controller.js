var burgers= require("../models/burger")

function burgers_controllers(app){

     app.get("/",function(req,res){
           burgers.selectAll(function(data){
               res.render("index", {burgerData:data})
           })
     })
     
    app.post("/api/burgers", function(req, res){
        console.log(req.body)
        burgers.create(req.body, function(data){
            res.render("index", {burgerData: req.body})
        })
    })

    app.put("/api/burgers/:id", function(req,res){
        var id = req.params.id
       burgers.update(id, function(data){
           res.render("index", {burgerData: id})
       })        
    })
}

module.exports= burgers_controllers