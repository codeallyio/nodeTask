const express = require('express');
const mongoose = require('mongoose');
const users = require('./users')


const app = express()

mongoose.connect(process.env.MONGO_DATABASE_URI || 'mongodb://localhost/interview', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.text())
app.use(express.json())

app.use(users)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


module.exports = app // for tests
