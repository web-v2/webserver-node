require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials'); //, (err)=>{}

//Servir contenido estatico.
app.use(express.static('public'));

//Controlador del home
app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Samir Vergara V',
        titulo: 'Curso de Node'
    });
})

//Controlador de generic
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Samir Vergara V',
        titulo: 'Curso de Node'
    });
})

//Controlador del elements
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Samir Vergara V',
        titulo: 'Curso de Node'
    });
})

//path error para 404
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

//Correr Servidor
app.listen(port, ()=>{
    console.log('App Corriendo en el puerto: '+port);
})