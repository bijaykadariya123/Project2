const mongoose = require("./connection.js")
const countryData = require("./seedData.js")
const countryModel=require("./country.js")

mongoose.connection.on("open", async()=>{
    const scrubbedData= countryData.map((v)=>{
        return{
            countryName: v.countryName,
            capitalCity: v.capitalCity,
            population: v.population,
            developedCountry: v.developedCountry,
            flagImageUrl:  v.flagImageUrl
        }
    })
    await countryModel.deleteMany({})
    await countryModel.create(scrubbedData)
    mongoose.connection.close()

    // console.log(scrubbedData[0]);
})