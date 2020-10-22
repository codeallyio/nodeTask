import express from 'express'
import mongoose from 'mongoose'
import users from './users'


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


export default app // for tests
