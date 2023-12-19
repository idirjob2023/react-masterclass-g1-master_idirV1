const mongoose = require("mongoose");

const autoSchema = mongoose.Schema(
    {
        brand: {
            type: String,
            required: [true, "Veuillez inserer le champ brand"],
        },
        model: {
             type: String,
             required: [true, "Veuillez inserer le champ model"],
        },
        year: {
            type: Number,
            required: [true, "Veuillez inserer le Champ year"],
        },
        color: {
            type: String,
            required: [true, "Veuillez inserer le chmp color"],
        },
        energy: {
            type: String,
            required: [true, "Veuillez inserer le champ energie"],
        },
        horsepower: {
            type: Number,
            required: [true, "Veuiller  inserer le Champ horsepower"]
        },
        photo: {
            type: String,
        },
    },
    {
        timestamps:true,
    }

);

module.exports = mongoose.mpdel("Auto",autoSchema);