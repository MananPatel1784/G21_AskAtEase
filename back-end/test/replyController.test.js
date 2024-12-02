import { expect } from 'chai';
import sinon from 'sinon';
import Replies from '../back-end/server/models/replies.js';
import Answer from '../back-end/server/models/answer.js';
import * as replyController from '../back-end/server/controllers/replyController.js';

describe('replyController', () => {
    let req, res, sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        req = { body: { reply: 'This is a reply', answerId: '123' } };
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('replyToAnswer', () => {
        it('should return 400 if reply or answerId is missing', async () => {
            req.body = { reply: '', answerId: '' };

            await replyController.replyToAnswer(req, res);

            expect(res.status.calledWith(400)).to.be.true;
            expect(res.json.calledWith({ message: "Reply and answer ID both are required!!" })).to.be.true;
        });

        it('should create a reply and update the answer', async () => {
            const answer = { replies: [], save: sinon.stub() };
            sandbox.stub(Replies, 'create').resolves();
            sandbox.stub(Answer, 'findById').resolves(answer);

            await replyController.replyToAnswer(req, res);

            expect(Replies.create.calledOnce).to.be.true;
            expect(Answer.findById.calledOnce).to.be.true;
            expect(answer.replies).to.include('This is a reply');
            expect(answer.save.calledOnce).to.be.true;
            expect(res.status.calledWith(201)).to.be.true;
            expect(res.json.calledWith({ message: "Reply sent successfully!!" })).to.be.true;
        });

        it('should return 404 if answer not found', async () => {
            sandbox.stub(Replies, 'create').resolves();
            sandbox.stub(Answer, 'findById').resolves(null);

            await replyController.replyToAnswer(req, res);

            expect(res.status.calledWith(404)).to.be.true;
            expect(res.json.calledWith({ message: "Answer not found!!" })).to.be.true;
        });

        it('should return 500 on error', async () => {
            sandbox.stub(Replies, 'create').throws(new Error('Error'));
            sandbox.stub(Answer, 'findById').resolves({});

            await replyController.replyToAnswer(req, res);

            expect(res.status.calledWith(500)).to.be.true;
            expect(res.json.calledWith({ error: "Error replying the answer!!" })).to.be.true;
        });
    });
});