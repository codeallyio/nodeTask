let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('users', () => {
    beforeEach((done) => {
        done()
    });

    describe('/GET users', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/getUsers')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    res.body.length.should.be.eql(0)
                    done()
                });
        });
    });
})