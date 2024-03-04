const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

function generateRandomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += String.fromCharCode(Math.floor(Math.random() * (122 - 48) + 48));
    }
    return result;
}

router.get("/", async (req,res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts)
})

router.get('/byId/:id', async(req,res) => {
    const id = req.params.id
    const post = await Posts.findByPk(id)
    // console.log(req)
    res.json(post)
})
router.post("/", async (req,res) => {
    const post = req.body
    console.log("recieved Body", post)
    await Posts.create(post)
    res.json(post)
})

// router.post("/", (req,))
module.exports = router