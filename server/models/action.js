//-----------------MONGOOSE MODEL SETUP---------------------
const mongoose = require('mongoose')
const AnimalSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,
    favoriteFood: String
},{timestamps:true})
//              Collection Name vvv
const Action = mongoose.model('Animal', AnimalSchema)

module.exports = Action;