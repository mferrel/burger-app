//this does a direct connection from the buttons to the database
var orm = require("../config/orm");

var burger = {
selectAll: function(cbController){
    //table name is "burgers"
    orm.selectAll("burgers", function(data){
        cbController(data);
    })
}
}
module.exports = burger;

//second in order