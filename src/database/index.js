const mysql = require("mysql2")

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bd_projeto"
    
})

conn.connect()

module.exports = conn