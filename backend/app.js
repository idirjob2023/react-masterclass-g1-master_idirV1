const express = require("express") ;
const colors = require("colors");
const cors = require("cors");
const compression = require("compression");
const path = require("path");
const dotenv = require('dotenv').config() ;
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express() ;

app.get("/api/users", (req, res) =>{
    res.status(200).json({
        message:"Hello Rec api",
    });
});

app.listen(port, () => console.log(`Serveur started on port ${port}`)) ;
