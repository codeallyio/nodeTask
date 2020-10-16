const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

var usersPseudoDB = require('../usersPseudoDB')
var serialID = require('../usersSerialID')

chai.use(chaiHttp)

describe('users when the database is empty', () => {
    beforeEach((done) => {
        usersPseudoDB = []
        serialID.value = 1
        console.log('seral', serialID)
        done()
    })

    describe('GET /users', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    res.body.length.should.be.eql(0)
                    done()
                })
        })
    })

    describe('GET /user/:id', () => {
        it('it should return a "User not found" message', (done) => {
            const id = 1

            chai.request(server)
                .get('/user/' + 1)
                .end((err, res) => {
                    res.should.have.status(404)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql(`User with id ${id} not found`)
                    done()
                })
        })
    })

    describe('POST /user', () => {
        it('it should create a new user and response with format: \n\t{\n\t\tmessage: <string>,\n\t\tuser: {\n\t\t\tid: <serial>,\n\t\t\tage: <number>,\n\t\t\tgender: <string>,\n\t\t\temail: <string>\n\t\t}\n\t}', (done) => {
            chai.request(server)
                .post('/user')
                .end((err, res) => {
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('User created successfully')
                    res.body.should.have.property('user')
                    res.body.user.should.have.property('id').eql(1)
                    res.body.user.should.have.property('age')
                    res.body.user.should.have.property('gender')
                    res.body.user.should.have.property('email')
                    done()
                })
        })
    })

    describe('POST /user?age=21&gender=male&email=adamtherandom@gmail.com', () => {
        it('it should create a new user and response with exactly: \n\t{\n\t\tmessage: \'User created successfully\',\n\t\tuser: {\n\t\t\tid: 1,\n\t\t\tage: 21,\n\t\t\tgender: \'male\',\n\t\t\temail: \'adamtherandom@gmail.com\'\n\t\t}\n\t}', (done) => {
            chai.request(server)
                .post('/user?age=21&gender=male&email=adamtherandom@gmail.com')
                .end((err, res) => {
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('User created successfully')
                    res.body.should.have.property('user')
                    res.body.user.should.have.property('id').eql(1)
                    res.body.user.should.have.property('age').eql(21)
                    res.body.user.should.have.property('gender').eql('male')
                    res.body.user.should.have.property('email').eql('adamtherandom@gmail.com')
                    done()
                })
        })
    })
})