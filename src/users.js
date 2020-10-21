const { Router } = require('express')
const { generateAge, generateGender, generateEmail } = require('./utils/dataGenerator')
const { validateGender, validateAge, validateEmail } = require('./utils/dataValidator')

const userModel = require('./model/user-model')


const router = Router()

router.get('/users', async (req, res) => { // get all users
    const users = await userModel.find()

    res.status(200).send(users)
})

router.get('/user/:id', (req, res) => { // get single user
    const { id } = req.params

    userModel.findById(id, (err, user) => {
        if (err || user === null) {
            return res.status(404).send({ message: `User with id ${id} not found` })
        }
        res.status(200).send({ message: 'User found successfully', user })
    })
})

router.post('/user', (req, res) => { // create user
    const urlParams = req.query

    const age = generateAge(urlParams.age)
    const gender = generateGender(urlParams.gender)
    const email = generateEmail(urlParams.email, gender)

    const newUser = new userModel({ age, gender, email });

    newUser.save((err, user) => {
        if (err) {
            return res.status(500).send({ message: 'Error occurred' })
        }

        res.status(200).send({ message: 'User created successfully', user })
    })
})

router.put('/user/:id', async (req, res) => { // update user
    const { id } = req.params

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

    try {
        const updatedUser = await userModel.updateOne({
            "_id": id
        }, updates)

        if (!updatedUser.n) {
            return res.status(404).send({ message: `User with id ${id} not found` })
        }

        // console.log(updatedUser)

        userModel.findById(id, (err, user) => {
            res.status(200).send({ message: 'User updated successfully', user })
        })
    } catch {
        return res.status(404).send({ message: `User with id ${id} not found` })
    }
})

router.delete('/user/:id', async (req, res) => { // delete user
    const { id } = req.params


    try {
        const deletedUser = await userModel.findOneAndDelete({
            "_id": id,
        })

        if (deletedUser === null) {
            throw Error('user not found')
            // return res.status(404).send({ message: `User with id ${id} not found` })
        }

        res.status(200).send({ message: 'User deleted successfully', user: deletedUser })
    } catch {
        return res.status(404).send({ message: `User with id ${id} not found` })

    }
})


module.exports = router