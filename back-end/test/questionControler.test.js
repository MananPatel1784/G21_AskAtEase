import * as chai from 'chai';
import sinon from 'sinon';
import express from 'express';
import supertest from 'supertest';
import natural from 'natural';
import cosineSimilarity from 'cosine-similarity';
import Question from '../back-end/server/models/question.js';
//import { findSimilarQuestions } from '../back-end/server/controllers/questionController.js';
import questionController from '../back-end/server/controllers/questionController.js';
const { findSimilarQuestions } = questionController;

const expect = chai.expect;

describe('POST /findSimilarQuestions', function() {
    let findStub;
    let app;
    let request;

    beforeEach(function() {
        findStub = sinon.stub(Question, 'find');
        app = express();
        app.use(express.json());
        app.post('/findSimilarQuestions', findSimilarQuestions);
        request = supertest(app);
    });

    afterEach(function() {
        findStub.restore();
    });

    it('should return 400 if questionName is not provided', async function() {
        const response = await request.post('/findSimilarQuestions').send({});

        expect(response.status).to.equal(400);
        expect(response.body).to.deep.equal({ message: 'Query is required' });
    });

    it('should return relevant questions based on similarity', async function() {
        const fakeQuestions = [
            { questionName: 'What is AI?' },
            { questionName: 'Explain artificial intelligence' },
            { questionName: 'What is machine learning?' }
        ];
        findStub.resolves(fakeQuestions);

        const response = await request.post('/findSimilarQuestions').send({ questionName: 'What is AI?' });

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body[0]).to.have.property('question');
        expect(response.body[0]).to.have.property('similarity');
    });

    it('should handle errors and return 500', async function() {
        findStub.rejects(new Error('Database error'));

        const response = await request.post('/findSimilarQuestions').send({ questionName: 'What is AI?' });

        expect(response.status).to.equal(500);
        expect(response.body).to.deep.equal({ error: 'Database error' });
    });
});