var express = require('express');
var http = require('http')
//var socketio = require('socket.io');
var bodyParser = require('body-parser')
var app = express();
var server = http.Server(app);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//  extended: true
//}));

app.get('/', function (req, res) {
  orm.connectAsync('mysql://root@localhost/mydb')
  .then(function(db) {
    var Person = db.define("persona", {
      cedula: String,
      nombres : String,
      apellidos : String
    });


    Person.createAsync(req.body)
    .then(function(results) {
      // ...
      res.send({mensaje:"Agrego correctamente a "+req.body.nombres });
    });
  });

});
app.post('/persona/ingresar', function (req, res) {
  //console.log(req.data);
  //console.log(req.params);
  //console.log(req.query.nombres);
  orm.connectAsync('mysql://root@localhost/mydb')
  .then(function(db) {
    var Person = db.define("persona", {
      cedula: String,
      nombres : String,
      apellidos : String ,
      edad:Number,
      telefono:String,
      direccion:String
    });


    Person.createAsync(req.body)
    .then(function(results) {
      // ...
      res.send({mensaje:"Agrego correctamente a "+req.body.nombres });
    });
  });


});

app.post('/persona/listar', function (req, res) {

  orm.connectAsync('mysql://root@localhost/mydb')
  .then(function(db) {
    var Person = db.define("persona", {
      cedula: { type: 'text' , key: true } ,
      nombres : String,
      apellidos : String

    });


    Person.all(function(err,items) {
      // ...
      console.log("nombre= "+JSON.stringify(items));
      //res.send({mensaje:"Agrego correctamente a "+req.body.nombres });
    })


  });


  //res.send({hola :"devuelve info de server"});
});

app.post('/prueba', function (req, res) {

  console.log("nombre= "+JSON.stringify(req.body));
  res.send({hola :"devuelve info de server"});
});

var orm = require("orm");




//var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));
