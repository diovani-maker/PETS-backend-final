const mongoose = require('mongoose');

const petSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter pet name"],
        },

        species: {
            type: String,
            required: [true, "Please enter species of the pet"],
        },

        breed: {
            type: String,
            required: false,
        },

        age: {
            type: Number,
            required: true,
        },

        owner: {
            type: String,
            required: [true, "Please enter pet owner name"],
        },

        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;