var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'something_db'
});
 
connection.connect(function(err){
  if(err) throw err;
  console.log("Connected");
  
  connection.query("SELECT * FROM user", function(err, res){
    if(err) throw err;
    console.log(res);
  })
});