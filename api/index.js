const express = require('express')
const app = express()
const db = require('./models')
let PORT = 8484

// Routers
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter)


db.sequelize.sync().then(() => {
app.listen(PORT,() => {
    console.log(`server is running on port: ${PORT}`)
}) 
})


