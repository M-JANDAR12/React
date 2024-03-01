const express = require('express')
const router = express.Router()

router.get("/", (req,res) => {
    console.log("Reseved a request",req)
    res.send("hello world")
})

// router.post("/", (req,))
module.exports = router