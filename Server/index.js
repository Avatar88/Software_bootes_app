var express = require('express');
var http = require('http')
//var socketio = require('socket.io');

var app = express();
var server = http.Server(app);

app.get('/productos', function (req, res) {
  orm.connectAsync('mysql://root@localhost/mydb')
    .then(function(db) {
      var Person = db.define("producto", {
        cedula: String,
        nombres : String,
        apellidos : String
      });


        Person.createAsync({ cedula: "12121", nombres: "John Jaime", apellidos: "Amor mio" })
        .then(function(results) {
    // ...
          res.send("Agrego correctamente");
        });
    });

});

var orm = require("orm");




//var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));
