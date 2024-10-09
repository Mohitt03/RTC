const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
    {

        u_name: {
            type: String,
            required: true,
        },
        team_name: {
            type: String,
            required: true,
        },
        leader: {
            name: {
                type: String,
                required: true,
            },
            uid: {
                type: Number
            }
        },
        phone: {
            type: Number,
            required: true,
        },
        whats_no: {
            type: Number,
            required: true,
        },
        recomended: {
            type: String,
            required: true,
        },
        time:{
            type: String,
            required: true,
        },
        value:{
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

const Game = model("game", gameSchema);

module.exports = Game;