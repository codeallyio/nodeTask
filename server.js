const express = require('express')
const app = express()

const { generateAge, generateGender, generateEmail } = require('./dataGenerator')

const usersPseudoDB = []

// MAKE SURE ALL USERS CONTAIN
//
// * ID
// * AGE
// * GENDER
// * EMAIL


app.get('/getUsers', () => { })

app.get('/getUser', () => { }) // by ID

app.post('/generateUser', () => { })

app.put('/updateUser', () => { }) // by ID

app.delete('/deleteUser', () => { }) // by ID


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
