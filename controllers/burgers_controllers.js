var burger = require("../models/burger")
function burgersControllers(app){
    //when you're dealing with data you always want to start with /api 
    //this is the conduit from the controllers to the database
app.get("/", function(req, res){
   burger.selectAll(function(data){
       //this "data" is from mySQL
       res.render("index", {burgerData:data});
   })          
});
}

module.exports = burgersControllers;

//first on the left