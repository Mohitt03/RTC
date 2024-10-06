const { Router } = require("express");
// const Game = require("../models/game");
axios = require("axios");
var session = require('express-session');
const router = Router();
const ejs = require('ejs');
router.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

router.get("/admin", (req, res) => {
    return res.render("admin")
})
module.exports = router;
