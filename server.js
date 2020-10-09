const express = require('express')
const app = express()

const { makeAge, makeGender, makeEmail } = require('./dataGenerator')

app.get('/randomUser', (req, res) => {
    const params = req.query
    
    const age = makeAge(params['age'])
    const gender = makeGender(params['gender'])
    const email = makeEmail(params['email'], gender)

    res.send({ age, gender, email }).status(200)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
   