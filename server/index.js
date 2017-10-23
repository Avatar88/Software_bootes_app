var express = require('express');
var app = express();
var http = require('http');
var bodyparser = require('body-parser');
var server = http.Server(app);
var orm = require('orm');

app.use(bodyparser.json());

app.post('/producto/create', function (req, res) {
  orm.connectAsync('mysql://root@localhost/mydb')
  .then(function(db){

    var producto = db.define("producto",{
      nombre: String,
      descripcion: String,
      calorias: Number,
      precio: Number,
      ImageSource : String

    });

    producto.createAsync(req.body)
    .then(function(results){

      res.send({mensaje : "El producto : " + "'" +  req.body.nombre + "'" +" se registró correctamente!." });


    });
  });
});


app.post('/producto/', function (req, res) {
  orm.connectAsync('mysql://root@localhost/mydb')
  .then(function(db){

    var producto = db.define("producto",{
      idproducto : {type: 'number', key : true},
      nombre: String,
      descripcion: String,
      calorias: Number,
      precio: Number,
      ImageSource : String

    });

    producto.all(function(err,productos) {
        // ...
      //  console.error(err);
        //console.log(JSON.stringify(productos));
        res.send(JSON.stringify(productos));
      })
  });
});





server.listen(3000, function () {
  console.log('app listening on port 3000!');
});
