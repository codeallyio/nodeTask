const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

var usersPseudoDB = require('../usersPseudoDB')

chai.use(chaiHttp)

describe('users', () => {
    beforeEach((done) => {
        done()
    })

    describe('GET /user', () => {
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
})