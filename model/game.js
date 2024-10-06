const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
    {
        team: {
            team_name: {
                type: String,
                required: true,
            },
            player1: {
                name1: {
                    type: String,
                    required: true,
                },
                uid1: {
                    type: Number
                }
            },
            player2: {
                name2: {
                    type: String
                },
                uid2: {
                    type: Number
                }
            },
            player3: {
                name3: {
                    type: String
                },
                uid3: {
                    type: Number
                }
            },
            player4: {
                name4: {
                    type: String
                },
                uid4: {
                    type: Number
                }
            }
        },
    },
    { timestamps: true }
);

const Game = model("game", gameSchema);

module.exports = Game;