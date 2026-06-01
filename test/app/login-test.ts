import request from 'supertest';
import app from '../../app';
import should = require('should');

describe("--= Login =--", () => {

    it("Login with valid credentials", (done) => {
        request(app)
            .post("/login")
            .send({ EMAIL: 'RE_COUTO', SENHA: '123' })
            .expect("Content-type", /json/)
            .expect(200)
            .end((err: any, res: any) => {
                if (err) return done(err);
                res.status.should.equal(200);
                done();
            });
    });

});