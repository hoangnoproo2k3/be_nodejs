require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const webRoute = require('./routes/web')
const connection = require('./config/db')
const port = process.env.PORT
const hostname = process.env.HOST_NAME
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data
const configViewEngine = require('./config/viewEngine')
//config static file
configViewEngine(app);
app.use('/', webRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})