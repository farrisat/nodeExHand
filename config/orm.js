var connection = require("./connection.js");

var orm = {
    all: function(cb) {
      var queryString = "SELECT * FROM burgers;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(burger_name, cb) {
      var queryString = "INSERT INTO burgers";
  
      queryString += " (";
      queryString += "burger_name";
      queryString += ") ";
      queryString += "VALUES(";
      queryString += "\""+ burger_name +"\"";
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // Update
    update: function( burger_name, devoured, cb) {
      var queryString = "UPDATE burgers";
  
      queryString += " SET ";
      queryString += "devoured =" +devoured;
      queryString += " WHERE ";
      queryString += "burger_name =" + "\""+ burger_name + "\"";
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

    
  };
  

module.exports = orm;


    // selectAll()
// insertOne()
// updateOne()
