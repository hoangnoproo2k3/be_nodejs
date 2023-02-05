require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const webRoute = require('./routes/web')
const connection = require('./config/db')
const port = process.env.PORT
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewEngine')
//config static file
configViewEngine(app);
app.use('/', webRoute)

connection.query(
    'SELECT * FROM `Users` ',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
    }
);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})