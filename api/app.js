
'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const Config = require('./config/config');
Config.setEnv(process.env.NODE_ENV);
const config = require('./config/config').getProps();
const enums = require('./common/constant');
const api = require('./routes');
const corsFilter = require('./routes/middlewares/cors.mw');
let mongoDao = require('./dao/mongo');
const PORT = process.env.PORT || 3002;
app.use(bodyParser.json());

app.use(corsFilter);




const mongoDBURI = Config.getProps().mongodb;


console.log('mongodb:', mongoDBURI);
mongoose.connect(mongoDBURI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', () => {
    console.log('mongodb:', mongoDBURI);
});

/**
 * use this middleware to verify jwt-token from there we can access NODEIdentity,
 * from NODEIdentity we know that on which port we need to deploy, NODEIdentity belong to company,
 * we can define it when we register and create token
 * Method will be define in util
 */
app.use(function(req, res, next) {
    next();
});

api.init(router);

app.use("/", router);

//handle bad calls
app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

//handle unhandled promise rejects
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason)
})

app.listen(PORT, () => {
    console.log(`api services running on port: ${PORT}`);
});


