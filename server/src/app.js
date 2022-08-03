require("dotenv").config()
require("./configs/db").connect()
const express = require("express")
const auth = require("./routers/auth")
// const space = require("./routers/space")
// const folder = require("./routers/folder")
const authMiddleware = require("./middlewares/auth")

const app = express()

app.use(express.json())

app.use('/api/auth', auth)
// app.use('/api/space', authMiddleware, space)
// app.use('/api/folder', authMiddleware, folder)

module.exports = app