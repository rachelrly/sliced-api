const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')
const { expect } = require('chai')
const supertest = require('supertest')


describe('User Endpoints', () => {

    let db;

    before('knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
        app.set('db', db)
    })

    after('destroy db', () => db.destroy());

    beforeEach('cleanup', () => helpers.cleanTables(db))

    afterEach('cleanup', () => helpers.cleanTables(db))

    describe(`POST /api/users`, () => {
        it('Given an email address and a hashed password, it responds with 201', () => {
            const user = {
                id: 1,
                email: 'sam@gmail.com',
                password: '$2a$04$E5ZgpymY0/gbQzcuTM66uOBqoDdUC/S3AL3RVHKtf2zcsbt3rEDem'
            }

            return supertest(app)
                .post(`/api/users`)
                .send(user)
                .expect(201)

        })

    })





})