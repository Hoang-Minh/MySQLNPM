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
  //var q = "SELECT * FROM user";
  // var q = `INSERT INTO user(username, pword, email, phone)
  // VALUES("Barry", "password", "barry@abc.com", "123345")`

  // var q = `INSERT INTO user SET ?`
  

  // var values = {
  //   username: "Someone2",
  //   pword: "12345",
  //   email: "someone@abc.com",
  //   phone: 111111
  // }
  var q = `UPDATE user SET ? WHERE ?`
  var values = [
    {
      pword: 22222
    },
    {
      username: "Barry"
    }
  ]
  connection.query(q, values, function(err, res){
    if(err) throw err;
    console.log(res);
  });

  connection.end(function(err){
    if(err) throw err;
  })
});