// middleware.js
const express = require('express');
const cors = require('cors');

function iniciarCors(app) {
    app.use(express.json());
    app.use(cors());
}


module.exports = {iniciarCors};
