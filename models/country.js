const mongoose = require("./connection.js")

const countrySchema = new mongoose.Schema({
    countryName: String,
    capitalCity: String,
    population: Number,
    developedCountry: Boolean,
    flagImageUrl:  String
})

const countryModel = mongoose.model("Countrie", countrySchema)
module.exports=countryModel