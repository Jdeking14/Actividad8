// app.js
require('dotenv').config();
const express = require('express');
const {iniciarCors} = require('./helpers/middlewares');
const routes = require('./routes/api');

const app = express();

// Configuración de middleware
iniciarCors(app);

// Configuración de rutas
app.use('/api', routes);

// Manejo de errores
app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
});


module.exports = app;
