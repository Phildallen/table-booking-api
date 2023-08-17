const express = require('express')
const router = require('./config/routes')
const loggerMiddleware = require('./logger/LoggerMiddleware')

const app = express()
const port = 3001

//Middleware to execute every time the app receives a request
// app.use(loggerMiddleware)
//if the content type of the request is JSON, parse it and put it in
//the property req.body
app.use(express.json())

// Add all the routes to app
router(app)

app.listen(port, () => {
    console.log(`table-booking-api app running. Listening on ${port}`)
})