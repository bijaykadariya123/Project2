const express = require("express")
const countryModel= require("../models/country.js")


const router = express.Router()



// Routes:

/////////////////////////////////////////////////////////////////////////////INDEX
router.get("/", async(req, res)=>{
    const allCountries = await countryModel.find({})
    res.render("index.ejs", {allCountries}) 
})
/////////////////////////////////////////////////////////////////////////////////// NEW
router.get("/new", (req, res)=>{
    res.render("new.ejs")
} )
///////////////////////////////////////////////////////////////////////////////////DELETE
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const oneCountry = await countryModel.findByIdAndDelete(id, req.body);
    res.redirect('/')
})

///////////////////////////////////////////////////////////////////////////////////UPDATE
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    req.body.developedCountry = req.body.developedCountry === 'on' ? true : false;
    const oneCountry = await countryModel.findByIdAndUpdate(id, req.body);
    res.redirect('/')
})
/////////////////////////////////////////////////////////////////////////////////////CREATE
router.post('/', async (req, res) => {
    if(req.body.developedCountry === 'on'){
        req.body.developedCountry= true;
    }else {
        req.body.developedCountry = false;
    }
   const oneCountry= await countryModel.create(req.body);
    res.redirect('/');
})

//////////////////////////////////////////////////////////////////////////////////////// EDIT
router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const oneCountry = await countryModel.findById(id);
    res.render('edit.ejs', {oneCountry})
})

/////////////////////////////////////////////////////////////////////////////////////////SHOW
router.get("/:id", async (req, res)=>{
    const id = req.params.id
    const oneCountry =  await countryModel.findById(id)
    res.render("show.ejs", {oneCountry, id})
})


module.exports=router