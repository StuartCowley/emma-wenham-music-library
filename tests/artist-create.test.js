const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('create artist', () => {
    describe('/artist', () => {
        describe('POST', () => {
            it('creates a new artist in a database' , async () => {
                const res = await request(app).post('/artist').send({
                    name: 'Tame Impala', 
                    genre: 'rock',
                });
            });
        });
    });
});