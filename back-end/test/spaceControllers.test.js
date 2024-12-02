import { expect } from 'chai';
import sinon from 'sinon';
import Space from '../back-end/server/models/spaces.js';
import Question from '../back-end/server/models/question.js';
import * as spaceControllers from '../back-end/server/controllers/spaceControllers.js';

describe('spaceControllers', () => {
    let req, res, sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        req = { body: {}, params: {} };
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('createSpace', () => {
        it('should create a new space', async () => {
            req.body = { name: 'Space Name', description: 'Space Description' };
            const savedSpace = { _id: '123', name: 'Space Name', description: 'Space Description' };
            sandbox.stub(Space.prototype, 'save').resolves(savedSpace);

            await spaceControllers.createSpace(req, res);

            expect(res.status.calledWith(201)).to.be.true;
            expect(res.json.calledWith(savedSpace)).to.be.true;
        });

        it('should return 500 on error', async () => {
            req.body = { name: 'Space Name', description: 'Space Description' };
            sandbox.stub(Space.prototype, 'save').throws(new Error('Error'));

            await spaceControllers.createSpace(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Error creating space!!" })).to.be.true;
        });
    });

    describe('getAllSpaces', () => {
        it('should get all spaces', async () => {
            const spaces = [{ _id: '123', name: 'Space Name', description: 'Space Description' }];
            sandbox.stub(Space, 'find').resolves(spaces);

            await spaceControllers.getAllSpaces(req, res);

            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith(spaces)).to.be.true;
        });

        it('should return 500 on error', async () => {
            sandbox.stub(Space, 'find').throws(new Error('Error'));

            await spaceControllers.getAllSpaces(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Error fetching spaces!!" })).to.be.true;
        });
    });

    describe('addQuestionToSpace', () => {
        it('should add a question to a space', async () => {
            req.params.spaceId = '123';
            req.body = { questionName: 'Question Name', questionUrl: 'http://question.url' };
            const space = { _id: '123', questions: [], save: sinon.stub().resolves() };
            const savedQuestion = { _id: '456', questionName: 'Question Name', questionUrl: 'http://question.url', spaceId: '123' };
            sandbox.stub(Space, 'findById').resolves(space);
            sandbox.stub(Question.prototype, 'save').resolves(savedQuestion);

            await spaceControllers.addQuestionToSpace(req, res);

            expect(space.questions).to.include(savedQuestion._id);
            expect(space.save.calledOnce).to.be.true;
            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith({ message: "Question added to space successfully!!", space })).to.be.true;
        });

        it('should return 404 if space not found', async () => {
            req.params.spaceId = '123';
            sandbox.stub(Space, 'findById').resolves(null);

            await spaceControllers.addQuestionToSpace(req, res);

            expect(res.status.calledWith(404)).to.be.true;
            expect(res.json.calledWith({ error: "Space not found!!" })).to.be.true;
        });

        it('should return 500 on error', async () => {
            req.params.spaceId = '123';
            sandbox.stub(Space, 'findById').throws(new Error('Error'));

            await spaceControllers.addQuestionToSpace(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Error adding question to space." })).to.be.true;
        });
    });

    describe('getSpaceQuestions', () => {
        it('should get all questions in a space', async () => {
            req.params.spaceId = '123';
            const space = { _id: '123', populate: sinon.stub().resolves({ questions: [{ _id: '456', answers: [] }] }) };
            sandbox.stub(Space, 'findById').resolves(space);

            await spaceControllers.getSpaceQuestions(req, res);

            expect(space.populate.calledOnce).to.be.true;
            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledWith({ questions: [{ _id: '456', answers: [] }] })).to.be.true;
        });

        it('should return 404 if space not found', async () => {
            req.params.spaceId = '123';
            sandbox.stub(Space, 'findById').resolves(null);

            await spaceControllers.getSpaceQuestions(req, res);

            expect(res.status.calledWith(404)).to.be.true;
            expect(res.json.calledWith({ error: "Space not found!!" })).to.be.true;
        });

        it('should return 500 on error', async () => {
            req.params.spaceId = '123';
            sandbox.stub(Space, 'findById').throws(new Error('Error'));

            await spaceControllers.getSpaceQuestions(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Error fetching questions from space!!" })).to.be.true;
        });
    });
});