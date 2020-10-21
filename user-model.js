const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requiredString = {
    type: String,
    required: true,
}

var userSchema = new Schema({
    age: requiredString,
    gender: requiredString,
    email: requiredString
})

module.exports = mongoose.model('User', userSchema)