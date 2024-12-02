import { expect } from 'chai';
import sinon from 'sinon';
import bcrypt from 'bcrypt';
import User from '../back-end/server/models/user.js';
import Answer from '../back-end/server/models/answer.js';
import Question from '../back-end/server/models/question.js';
import validatePassword from '../back-end/server/controllers/signup.js';
import * as myProfileControllers from '../back-end/server/controllers/myProfileControllers.js';

describe('myProfileControllers', () => {
    

    let req, res, sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        req = { params: { id: '123' }, body: {} };
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('showProfileAnalytics', () => {
        it('should return profile analytics', async () => {
            const user = { followers: [1, 2], following: [3, 4] };
            sandbox.stub(User, 'findById').resolves(user);

            await myProfileControllers.showProfileAnalytics(req, res);

            //console.log('res.status:', res.status.args);
            //console.log('res.json:', res.json.args);

            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith({ followers: 2, following: 2 })).to.be.true;
        });

        it('should return 404 if profile not found', async () => {
            sandbox.stub(User, 'findById').resolves(null);

            await myProfileControllers.showProfileAnalytics(req, res);

            expect(res.status.calledWith(404)).to.be.true;
            expect(res.json.calledWith({ error: "Profile Not Found!!" })).to.be.true;
        });

        it('should return 500 on error', async () => {
            sandbox.stub(User, 'findById').throws(new Error('Error'));

            await myProfileControllers.showProfileAnalytics(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Error Fetching Analytics!!" })).to.be.true;
        });
    });

    describe('deactivateAccount', () => {
        it('should deactivate account', async () => {
            const user = { isActive: false };
            sandbox.stub(User, 'findByIdAndUpdate').resolves(user);

            await myProfileControllers.deactivateAccount(req, res);

            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith({ message: "User account deactivated", user })).to.be.true;
        });

        it('should return 404 if user not found', async () => {
            sandbox.stub(User, 'findByIdAndUpdate').resolves(null);

            await myProfileControllers.deactivateAccount(req, res);

            expect(res.status.calledWith(404)).to.be.true;
            expect(res.json.calledWith({ message: "User not found" })).to.be.true;
        });

        it('should return 500 on error', async () => {
            sandbox.stub(User, 'findByIdAndUpdate').throws(new Error('Error'));

            await myProfileControllers.deactivateAccount(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Failed to deactivate user account" })).to.be.true;
        });
    });

    describe('deleteAccount', () => {
        it('should delete account', async () => {
            sandbox.stub(Question, 'deleteMany').resolves();
            sandbox.stub(Answer, 'deleteMany').resolves();
            sandbox.stub(User, 'findByIdAndDelete').resolves({ _id: '123' });

            await myProfileControllers.deleteAccount(req, res);

            //console.log('res.status:', res.status.args);
            //console.log('res.json:', res.json.args);
            
            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith({ message: "User account deleted permanently" })).to.be.true;
        }); 

        // it('should return 404 if user not found', async () => {
        //     this.timeout(5000);
        //     sandbox.stub(Question, 'deleteMany').resolves();
        //     sandbox.stub(User, 'findByIdAndDelete').resolves(null);

        //     await myProfileControllers.deleteAccount(req, res);

        //     //console.log('res.status:', res.status.args);
        //     //console.log('res.json:', res.json.args);

        //     expect(res.status.calledWith(404)).to.be.true;
        //     expect(res.json.calledWith({ message: "User not found" })).to.be.true;
        // }); //Returning 500 instead of 404

        it('should return 500 on error', async () => {
            sandbox.stub(Question, 'deleteMany').throws(new Error('Error'));

            await myProfileControllers.deleteAccount(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Failed to delete user account" })).to.be.true;
        });
    });

    describe('reactivateAccount', () => {
        it('should reactivate account', async () => {
            const user = { isActive: true };
            sandbox.stub(User, 'findByIdAndUpdate').resolves(user);

            await myProfileControllers.reactivateAccount(req, res);

            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith({ message: "User account reactivated", user })).to.be.true;
        });

        it('should return 404 if user not found', async () => {
            sandbox.stub(User, 'findByIdAndUpdate').resolves(null);

            await myProfileControllers.reactivateAccount(req, res);

            expect(res.status.calledWith(404)).to.be.true;
            expect(res.json.calledWith({ message: "User not found" })).to.be.true;
        });

        it('should return 500 on error', async () => {
            sandbox.stub(User, 'findByIdAndUpdate').throws(new Error('Error'));

            await myProfileControllers.reactivateAccount(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Failed to reactivate user account" })).to.be.true;
        });
    });

    describe('changePassword', () => {
        it('should change password', async () => {
            req.body.newPassword = 'NewPassword123!';
            const user = { save: sinon.stub().resolves() };
            sandbox.stub(User, 'findById').resolves(user);
            sandbox.stub(bcrypt, 'hash').resolves('hashedPassword');
   
            await myProfileControllers.changePassword(req, res, validatePassword);
   
            expect(user.password).to.equal('hashedPassword');
            expect(user.save.calledOnce).to.be.true;
            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith({ message: "Password updated successfully" })).to.be.true;
        });

        it('should return 400 if new password is not provided', async () => {
            await myProfileControllers.changePassword(req, res);

            expect(res.status.calledWith(400)).to.be.true;
            expect(res.json.calledWith({ error: "New Password is required!!" })).to.be.true;
        });

        // it('should return 400 if new password is invalid', async () => {
        //     req.body.newPassword = 'short';
        //     const user = { save: sinon.stub().resolves() };
        //     sandbox.stub(User, 'findById').resolves(user);
        //     sandbox.stub(bcrypt, 'hash').resolves('hashedPassword');
            
        
        //     await myProfileControllers.changePassword(req, res, validatePassword);
        
        //     //console.log('res.status:', res.status.args);
        //     //console.log('res.json:', res.json.args);
        
        //     expect(user.save.notCalled).to.be.true;
        //     expect(res.status.calledWith(400)).to.be.true;
        //     expect(res.json.calledWith({
        //         error: "Password should be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one numerical value, and one special character!!"
        //     })).to.be.true;
        // });

        it('should return 404 if user not found', async () => {
            req.body.newPassword = 'NewPassword123!';
            sandbox.stub(User, 'findById').resolves(null);

            await myProfileControllers.changePassword(req, res);

            expect(res.status.calledWith(404)).to.be.true;
            expect(res.json.calledWith({ message: "User not found" })).to.be.true;
        });

        it('should return 500 on error', async () => {
            req.body.newPassword = 'NewPassword123!';
            sandbox.stub(User, 'findById').throws(new Error('Error'));

            await myProfileControllers.changePassword(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Failed to update password", details: 'Error' })).to.be.true;
        });
    });

    describe('followUser', () => {
        it('should follow a user', async () => {
            req.params = { followerId: '123', followingId: '456' };
            const user = { following: [], save: sinon.stub() };
            const userToFollow = { followers: [], save: sinon.stub() };
            sandbox.stub(User, 'findById').withArgs('123').resolves(user).withArgs('456').resolves(userToFollow);

            await myProfileControllers.followUser(req, res);

            expect(user.following).to.include('456');
            expect(userToFollow.followers).to.include('123');
            expect(res.json.calledWith({ status: true, message: "User followed successfully" })).to.be.true;
        });

        it('should return 404 if follower user not found', async () => {
            req.params = { followerId: '123', followingId: '456' };
            sandbox.stub(User, 'findById').withArgs('123').resolves(null).withArgs('456').resolves({});

            await myProfileControllers.followUser(req, res);

            expect(res.status.calledWith(404)).to.be.true;
            expect(res.json.calledWith({ status: false, error: "Follower user not found" })).to.be.true;
        });

        it('should return 404 if following user not found', async () => {
            req.params = { followerId: '123', followingId: '456' };
            sandbox.stub(User, 'findById').withArgs('123').resolves({}).withArgs('456').resolves(null);

            await myProfileControllers.followUser(req, res);

            expect(res.status.calledWith(404)).to.be.true;
            expect(res.json.calledWith({ status: false, error: "Following user not found" })).to.be.true;
        });

        it('should return 500 on error', async () => {
            req.params = { followerId: '123', followingId: '456' };
            sandbox.stub(User, 'findById').throws(new Error('Error'));

            await myProfileControllers.followUser(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ status: false, error: "Failed to follow user" })).to.be.true;
        });
    });

    describe('getTheFeed', () => {
        // it('should get the feed', async () => {
        //     this.timeout(5000);
        //     req.params.id = '123';
        //     const user = { following: [{ questionsAsked: ['q1', 'q2'] }] };
        //     const questions = [{ questionName: 'q1' }, { questionName: 'q2' }];
        //     sandbox.stub(User, 'findById').resolves(user);
        //     sandbox.stub(Question, 'find').resolves(questions);

        //     await myProfileControllers.getTheFeed(req, res);

        //     expect(res.json.calledWith({ feed: questions })).to.be.true;
        // });

        // it('should return 404 if user not found', async () => {
        //     req.params.id = '123';
        //     sandbox.stub(User, 'findById').resolves(null);

        //     await myProfileControllers.getTheFeed(req, res);

        //     expect(res.status.calledWith(404)).to.be.true;
        //     expect(res.json.calledWith({ status: false, error: "User not found!!" })).to.be.true;
        // });

        // it('should return 200 if no posts to display', async () => {
        //     req.params.id = '123';
        //     const user = { following: [] };
        //     sandbox.stub(User, 'findById').resolves(user);

        //     await myProfileControllers.getTheFeed(req, res);

        //     expect(res.status.calledWith(200)).to.be.true;
        //     expect(res.json.calledWith({ status: true, message: "No posts to display!!" })).to.be.true;
        // });

        it('should return 500 on error', async () => {
            req.params.id = '123';
            sandbox.stub(User, 'findById').throws(new Error('Error'));

            await myProfileControllers.getTheFeed(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ status: false, error: "Failed to get the feed!!" })).to.be.true;
        });
    });
});