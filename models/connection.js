// import dependencies
require("dotenv").config()
const mongoose = require("mongoose")

// get DATABASE URI

const DATABASE_URL = process.env.DATABASE_URL;


// connect to MongoDB
mongoose.connect(DATABASE_URL)


// connection Events

mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error));

// export the connection
module.exports = mongoose;