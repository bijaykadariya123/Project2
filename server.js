// Import our Dependencies
require("dotenv").config()
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override")
const countryRoutes= require("./controllers/countryRoutes.js")

// express application
const app = express()


// middleware
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Routes
app.use("/", countryRoutes)



// Server Listener
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`${PORT} is working`);
})