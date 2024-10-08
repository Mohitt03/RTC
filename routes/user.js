const { Router } = require("express");
const Game = require("../model/game");
axios = require("axios");
var session = require('express-session');
const router = Router();
const ejs = require('ejs');
router.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

router.get("/home", (req, res) => {
    return res.render("home")
})

router.get("/ff", (req, res) => {
    return res.render("ff")
})

router.get("/register1", (req, res) => {
    return res.render("register1")
})

router.post("/register1", async (req, res) => {
    const game = await Game.create({
        team: {
            team_name: req.body.team_name,
            player1: {
                name1: req.body.name1,
                uid1: req.body.uid1
            }
        }
    })
    res.render("complete")
})
module.exports = router;