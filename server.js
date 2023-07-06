// Import our Dependencies
require("dotenv").config()
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override")

// express application
const app = express()


// middleware
app.use(morgan("dev"))
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Routes

app.get("/", (req, res)=>{
    res.send("Hello World")
})


// Server Listener
const PORT = process.env.PORT || 3009

app.listen(PORT, ()=>{
    console.log(`${PORT} is working`);
})