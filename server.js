var express = require("express");
//install npm handlebars
var exphbs = require("express-handlebars");

//create the listener and all of the requests - GET, POST, PUT, DELETE
var app = express()

//process.env.PORT is the port for heroku 
var PORT = process.env.PORT || 8000; 


//this allows the server to read the handlebars extention, defines main as the default layout
app.engine("handlebars", exphbs({defaultLayout:"main"}))

//allows the server to display handlebars that includes the server data -MySQL/API
app.set("view engine", "handlebars")


//url route - public folder route as a local host 
app.use(express.static("public"))

//middleware allows you to translate the users data into Json, 
//it put the user data into req.body
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//import the controller into the server to connect all of the routes
var burgers_controller = require("./controllers/burgers_controller")
burgers_controller(app);

app.listen(PORT, function(){
    console.log("app is listening on http://localhost:" + PORT)
}); 