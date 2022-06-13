const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('create album', () => {
  let db;
  let artist;

  beforeEach(async () => {
      db = await getDb();

    [artist] = await db.query('SELECT * from Artist');

});

  afterEach(async () => {
    await db.query('DELETE FROM Albums');
    await db.close();
  });

  describe('/album', () => {
    describe('POST', () => {
      it('creates a new album in a database', async () => {
        
        if(artist[0]) {
        const res = await request(app).post('/artist/:artistId/album').send({
          name: 'Spice Girls',
          genre: 'pop',
          year: '1997',
        });

        expect(res.status).to.equal(201);

        const [[albumEntries]] = await db.query(
          `SELECT * FROM Albums WHERE name = 'Spice Girls'`
        );

        expect(albumEntries.name).to.equal('Spice World');
        expect(albumEntries.genre).to.equal('pop');
        expect(albumEntries.year).to.equal('1997');
        }
      });
    });
  });
});
