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

app.listen(port, () => console.log(`Serveur started on port ${port}`)) ;
