import * as chai from 'chai';
import sinon from 'sinon';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../back-end/server/models/user.js';
//import { login } from '../back-end/server/controllers/login.js';
import loginModule from '../back-end/server/controllers/login.js';
const { login } = loginModule;
import express from 'express';
import supertest from 'supertest';

const expect = chai.expect;

describe('POST /login', function() {
    let findOneStub;
    let bcryptCompareStub;
    let jwtSignStub;
    let app;
    let request;

    beforeEach(function() {
        findOneStub = sinon.stub(UserModel, 'findOne');
        bcryptCompareStub = sinon.stub(bcrypt, 'compare');
        jwtSignStub = sinon.stub(jwt, 'sign');
        app = express();
        app.use(express.json());
        app.post('/login', login);
        request = supertest(app);
    });

    afterEach(function() {
        findOneStub.restore();
        bcryptCompareStub.restore();
        jwtSignStub.restore();
    });

    it('should return 403 if email is not found', async function() {
        findOneStub.resolves(null);

        const response = await request.post('/login').send({ emailID: 'admin@example.com', password: 'password' });

        expect(response.status).to.equal(403);
        expect(response.body).to.deep.equal({ message: "Email Id not found!!", success: false });
    });

    it('should return 403 if password does not match', async function() {
        const fakeUser = { email: 'admin@example.com', password: 'hashedpassword' };
        findOneStub.resolves(fakeUser);
        bcryptCompareStub.resolves(false);

        const response = await request.post('/login').send({ emailID: 'admin@example.com', password: 'password' });

        expect(response.status).to.equal(403);
        expect(response.body).to.deep.equal({ message: "Invalid Password!!", success: false });
    });

    it('should return 201 and a token if authentication is successful', async function() {
        const fakeUser = { email: 'admin@example.com', password: 'hashedpassword', _id: '123' };
        findOneStub.resolves(fakeUser);
        bcryptCompareStub.resolves(true);
        jwtSignStub.returns('fake-jwt-token');

        const response = await request.post('/login').send({ emailID: 'admin@example.com', password: 'password' });

        expect(response.status).to.equal(201);
        expect(response.body).to.deep.equal({
            message: "Sign In Successfully",
            success: true,
            token: 'fake-jwt-token'
        });
    });

    it('should handle internal server errors', async function() {
        findOneStub.rejects(new Error('Database error'));

        const response = await request.post('/login').send({ emailID: 'admin@example.com', password: 'password' });

        expect(response.status).to.equal(500);
        expect(response.body).to.deep.equal({
            message: "Internal Server Error",
            success: false
        });
    });
});