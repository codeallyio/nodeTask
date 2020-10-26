import { Router } from 'express'

import { generateAge, generateGender, generateEmail } from './utils/dataGenerator'
import { validateGender, validateAge, validateEmail } from './utils/dataValidator'
import userModel from './model/user-model'


const router = Router()


// create all user(s) routes here
// use userModel for communication with MongoDB
// use router for resolving HTTP requests


export default router