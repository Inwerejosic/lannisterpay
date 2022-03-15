const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectDB = require('./config/dbConfig')

const app = express()

connectDB()
app.use(express.json())

// const fecRouter = require('.router/fecRouts')
// app.use('/fees', fecRouter)

app.listen(8000, () => {
    console.log('Server Running')
})
