const express = require('express')
const users = require('./users')


const app = express()

app.use(express.text())
app.use(express.json())

app.use(users)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


module.exports = app // for tests
