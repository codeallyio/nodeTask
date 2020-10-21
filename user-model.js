const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requiredNumber = {
    type: Number,
    required: true,
}

const requiredString = {
    type: String,
    required: true,
}

var userSchema = new Schema({
    age: requiredNumber,
    gender: requiredString,
    email: requiredString
})

module.exports = mongoose.model('User', userSchema)