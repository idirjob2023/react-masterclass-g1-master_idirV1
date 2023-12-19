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
      required: [true, "Veuillez inserer le champ year"],
    },
    color: {
      type: String,
      required: [true, "Veuillez inserer le champ color"],
    },
    energy: {
      type: String,
      required: [true, "Veuillez inserer le champ energy"],
    },
    horsepower: {
      type: Number,
      required: [true, "Veuillez inserer le champ horsepower"],
    },
    photo: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Auto", autoSchema);
