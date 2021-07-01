let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('./../app');
// let server = require('localhost:5000');
//Our parent block

let inputSize = 10000;
const input = [];
for (let i = 0; i < inputSize; i++) {
    input.push({
        "Gender": "Female",
        "HeightCm": 150,
        "WeightKg": 70
    });
}
describe('Podcast', () => {
    describe('/POST media', () => {
        it('should send parameters to : /bmi POST', (done) => {
            chai.request(server)
                .post('/bmi')
                .send(input)
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    (res.body.data.length).should.be.eql(inputSize);
                    done();
                });
        });
    });
})