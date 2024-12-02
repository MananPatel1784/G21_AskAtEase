import * as chai from 'chai';
import sinon from 'sinon';
import express from 'express';
import supertest from 'supertest';
import bcrypt from 'bcrypt';
import User from '../back-end/server/models/user.js';
//import { handleSignUp } from '../back-end/server/controllers/signup.js';
import signupController from '../back-end/server/controllers/signup.js';
const { handleSignUp } = signupController;

const expect = chai.expect;

describe('POST /signup', function() {
    let findOneStub;
    let createStub;
    let bcryptGenSaltStub;
    let bcryptHashStub;
    let app;
    let request;

    beforeEach(function() {
        findOneStub = sinon.stub(User, 'findOne');
        createStub = sinon.stub(User, 'create');
        bcryptGenSaltStub = sinon.stub(bcrypt, 'genSalt');
        bcryptHashStub = sinon.stub(bcrypt, 'hash');
        app = express();
        app.use(express.json());
        app.post('/signup', handleSignUp);
        request = supertest(app);
    });

    afterEach(function() {
        findOneStub.restore();
        createStub.restore();
        bcryptGenSaltStub.restore();
        bcryptHashStub.restore();
    });

    it('should return 400 if any field is missing', async function() {
        const response = await request.post('/signup').send({ username: 'user', password: 'Password1!', emailId: '' });

        expect(response.status).to.equal(400);
        expect(response.body).to.deep.equal({ error: "All fields are required!!" });
    });

    it('should return 400 if username already exists', async function() {
        findOneStub.withArgs({ username: 'user' }).resolves({ username: 'user' });

        const response = await request.post('/signup').send({ username: 'user', password: 'Password1!', emailId: 'user@example.com' });

        expect(response.status).to.equal(400);
        expect(response.body).to.deep.equal({ error: "Username already exists!!" });
    });

    it('should return 400 if emailId already exists', async function() {
        findOneStub.withArgs({ emailId: 'user@example.com' }).resolves({ emailId: 'user@example.com' });

        const response = await request.post('/signup').send({ username: 'user', password: 'Password1!', emailId: 'user@example.com' });

        expect(response.status).to.equal(400);
        expect(response.body).to.deep.equal({ error: "Email-Id already exists!!" });
    });

    it('should return 400 if password is invalid', async function() {
        const response = await request.post('/signup').send({ username: 'user', password: 'pass', emailId: 'user@example.com' });

        expect(response.status).to.equal(400);
        expect(response.body).to.deep.equal({
            error: "Password should be at least 8 characters and contain atleast one uppercase letter, one lowercase letter, one numerical value and one special character!!"
        });
    });

    it('should return 201 if signup is successful', async function() {
        findOneStub.resolves(null);
        bcryptGenSaltStub.resolves('salt');
        bcryptHashStub.resolves('hashedPassword');
        createStub.resolves({ username: 'user', password: 'hashedPassword', emailId: 'user@example.com' });

        const response = await request.post('/signup').send({ username: 'user', password: 'Password1!', emailId: 'user@example.com' });

        expect(response.status).to.equal(201);
        expect(response.body).to.deep.equal({ msg: "Successfully signed up!!" });
    });
});