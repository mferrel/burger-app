//this does a direct connection to the database
var orm = require("../config/orm");

var burger = {
selectAll: function(cbController){
    orm.selectAll("burgers", function(data){
        cbController(data);
    })
}
}
module.exports = burger;