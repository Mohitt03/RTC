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

router.get("/admin", (req, res) => {
    return res.render("admin")
})

router.get("/game", async (req, res) => {
    const game = await Game.find()
    return res.render("game", { datas: game });
})

// Game Delete

router.get('/game/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const game = await Game.findByIdAndDelete(id);


        if (!game) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.redirect('back');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})


router.get("/admin2", (req, res) => {
    return res.render("admin2")
})

module.exports = router;