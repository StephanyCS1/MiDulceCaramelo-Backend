const express = require('express');
//const bodyPase = require('body-paser');
const app = express();

//config express
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-header, Authorization, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

module.exports = app;