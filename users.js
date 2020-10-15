const { Router } = require('express')
const { generateAge, generateGender, generateEmail } = require('./dataGenerator')
const { validateGender, validateAge, validateEmail } = require('./dataValidator')

var usersPseudoDB = require('./usersPseudoDB')

const router = Router()

let serialID = 1

router.get('/users', (req, res) => { // get all users
    res.status(200).send(usersPseudoDB)
})

router.get('/user/:id', (req, res) => { // get single user
    const { id } = req.params

    const user = usersPseudoDB.find(u => u.id == id)

    if (!user) {
        return res.status(404).send({ message: `User with id ${id} not found` })
    }

    res.status(200).send({ message: 'User found successfully', user })
})

router.post('/user', (req, res) => { // create user
    const urlParams = req.query

    const age = generateAge(urlParams.age)
    const gender = generateGender(urlParams.gender)
    const email = generateEmail(urlParams.email, gender)

    id = serialID++

    const user = { id, age, gender, email }

    usersPseudoDB.push(user)

    res.status(201).send({ message: 'User successfully created', user })
})

router.put('/user/:id', (req, res) => { // update user
    const { id } = req.params

    const user = usersPseudoDB.find(u => u.id == id)

    if (!user) {
        return res.status(404).send({ message: `User with id ${id} not found` })
    }

    const updates = {}

    if (req.body != undefined) {
        if (validateAge(req.body.age)) {
            updates.age = req.body.age
        }
        if (validateGender(req.body.gender)) {
            updates.gender = req.body.gender
        }
        if (validateEmail(req.body.email)) {
            updates.email = req.body.email
        }
    }

    Object.assign(user, updates)

    res.status(200).send(user)
})

router.delete('/user/:id', (req, res) => { // delete user
    const { id } = req.params

    const user = usersPseudoDB.find(u => u.id == id)

    if (!user) {
        return res.status(404).send({ message: `User with id ${id} not found` })
    }

    usersPseudoDB = usersPseudoDB.filter(u => u.id != id)

    res.status(404).send({ message: 'User deleted successfully', user })
})


module.exports = router