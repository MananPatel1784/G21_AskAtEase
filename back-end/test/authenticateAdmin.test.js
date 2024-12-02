import * as chai from 'chai';
import sinon from 'sinon';
import bcrypt from 'bcrypt';
import User from '../back-end/server/models/user.js';
import authenticateAdmin from '../back-end/server/controllers/authenticateAdmin.js';

const expect = chai.expect;

describe('authenticateAdmin', function() {
    let findOneStub;
    let bcryptCompareStub;

    beforeEach(function() {
        findOneStub = sinon.stub(User, 'findOne');
        bcryptCompareStub = sinon.stub(bcrypt, 'compare');
    });

    afterEach(function() {
        findOneStub.restore();
        bcryptCompareStub.restore();
    });

    it('should return false if user is not found', async function() {
        findOneStub.resolves(null);

        const result = await authenticateAdmin('admin', 'password');
        expect(result).to.be.false;
    });

    it('should return false if password does not match', async function() {
        const fakeUser = { username: 'admin', password: 'hashedpassword' };
        findOneStub.resolves(fakeUser);
        bcryptCompareStub.resolves(false);

        const result = await authenticateAdmin('admin', 'password');
        expect(result).to.be.false;
    });

    it('should return the admin if authentication is successful', async function() {
        const fakeUser = { username: 'admin', password: 'hashedpassword' };
        findOneStub.resolves(fakeUser);
        bcryptCompareStub.resolves(true);

        const result = await authenticateAdmin('admin', 'password');
        expect(result).to.equal(fakeUser);
    });

    it('should handle errors and return false', async function() {
        findOneStub.rejects(new Error('Database error'));

        const result = await authenticateAdmin('admin', 'password');
        expect(result).to.be.false;
    });
});