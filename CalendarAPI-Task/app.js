const express = require('express');
const path = require('path')
const api = require('./api')
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(cors(cors.CorsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));

app.use(express.static(__dirname + '/UI'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'UI/index.html'));
})

module.exports = app;