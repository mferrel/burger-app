var express = require("express");
var exphbs = require("express-handlebars");
 
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
// this creates the tunnel to access the server
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
//lines 12-34 establishes the connection to the mySQL database
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//converts public folder into local host URL
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var burgerControllers = require("./controllers/burgers_controllers");
burgerControllers(app);

app.listen(PORT, function(){
  console.log("App is listening on http://localhost:" + PORT);
})


 