require("dotenv").config()
require("./configs/db").connect()
const express = require("express")
const cors = require('cors')
const auth = require("./routers/auth")
const recommend = require("./routers/recommend")
const authMiddleware = require("./middlewares/auth")

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', auth)
app.use('/api/recommend', authMiddleware, recommend)

module.exports = app