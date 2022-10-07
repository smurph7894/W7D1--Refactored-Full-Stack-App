const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({

//an _id feild is automatically created with each entry created

    name: {
        type: String,
        required: [true, "A game's name is required!"],
        minlength: [3, "Name's length msut be at least 3 characters!"]
    },
    yearReleased: {
        type: Number,
        required: [true, "A game's release year is required!"],
        min: [1950, "No video game was made before the year 1950! Pick a higher year!"]
    },
    genre: {
        type: String,
        required: [true, "Need a genre!!!"],
        enum: [
            "Action",
            "Platformer",
            "Survival",
            "RPG",
            "FPS",
            "RTS",
            "MMO",
            "Puzzle",
            "Sports",
            "Adventure",
            "Children's"
        ]
    },
    image: {
        type: String,
        required: [true, "We need a picture!!!"]
    },
    rating: {
        type: String,
        enum: [
            "T",
            "E",
            "MA",
            "AO",
            "E10",
            "Y",
            "No rating"
        ]
    },
    company: {
        type: String
    }
}, {timestamps: true});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;