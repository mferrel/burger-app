var mysql = require("mysql")
var connection = mysql.createConnection({
    host: "localHost", 
    port: 3306,
    user: "root",
    password: "7348502509Mf!",
    database: "burgers_db"
})

connection.connect(function(error){
    console.log("Connection ID", connection.threadId)
})
module.exports = connection;