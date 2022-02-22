/**
 *  ######################## IMPORTACIÓN DE MÓDULOS ########################
 */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const http = require('http');
const path = require('path');

/**
 *  ######################## CONFIGURACIÓN DEL SERVIDOR ########################
 */

const app = express();
app.use(express.json());
app.use(morgan('dev'));

//Se configura que express utilice a body-parser como middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Fijamos el directorio estático para los recursos que usa el HTML
app.use(express.static(__dirname + '/public'));

//Creación del servidor y su respectivo puerto
const server = http.createServer(app);
const puerto = 3000;

/**
 *  ######################## RUTAS ########################
 */

app.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/pag2', (req, res, next) => {
    //res.send('Método GET, devolviendo solamente una cadena de texto :D');
    res.json({Método: 'GET', Ruta: '/', Descripción: 'Respuesta tipo JSON', Estado: "Todo OK :D"});
});
app.post('/rutapost',function(req,res){
    res.send('Método POST funcionando correctamente :D');
});

/**
 *  ######################## SE INICIA EL SERVIDOR Y SE DEJA ESCUCHANDO ########################
 */

server.listen(puerto, () => {
    console.log('Servidor inicializado en el puerto: ', puerto);
});