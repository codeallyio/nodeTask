const { Router } = require('express')
const { generateAge, generateGender, generateEmail } = require('./dataGenerator')


const router = Router()
const usersPseudoDB = []


router.get('/getUsers', () => { })

router.get('/getUser', () => { }) // by ID

router.post('/generateUser', () => { })

router.put('/updateUser', () => { }) // by ID

router.delete('/deleteUser', () => { }) // by ID


module.exports = router