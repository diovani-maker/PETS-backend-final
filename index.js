const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const petRoute = require('./routes/pet.route.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/pets", petRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server for Pets");
});

mongoose.connect("mongodb+srv://diovani_db_user_pets:2nUBxW0REAjFqyyZ@backenddb.r67je0z.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to MongoDB Atlas!");
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch((err) => {
        console.error("Connection to MongoDB failed!", err);
    });
