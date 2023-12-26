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
app.use(compression()) ;
app.use(express.json()) ;
app.use(express.urlencoded({extended:false})) ;
app.use(cors()) ;

app.use("/api/auth",require('./routes/authRoutes'));
app.use("/api/users",require('./routes/userRoutes'));
app.use("/api/autos",require('./routes/autosRoutes'));
app.use("/api/tokens",require('./routes/tokenRoutes'));
app.use("/api/roles",require('./routes/roleRoutes'));

app.use("/api/products",require('./routes/productRoutes'));

app.listen(port, () => console.log(`Serveur started on port ${port}`)) ;
