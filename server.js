const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
// const connectDB = require('./config/db')

const app = express()

// connectDB()
app.use(express.json())

// const feeRouter = require('.router/fees')
// app.use('/fees', feeRouter)

app.listen(8000, () => {
    console.log('Server Running')
})
