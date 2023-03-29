const router = require("express").Router();

router.get("/create", (req, res) =>{
    res.send(`<h1>Meme Cataloguer</h1>
    <p>Hi! This here is a website that allows you to catalogue all the memes of the internet. </p>`)
})

router.post("/", (req, res) =>{
    
})