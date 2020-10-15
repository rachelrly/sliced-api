const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { expect } = require('chai')
const helpers = require('./test-helpers')

describe('Auth Endpoints', function () {
    let db

    const testUsers = helpers.usersArr;
    const testUser = testUsers[1];

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

    describe(`POST /api/auth/login`, () => {
        beforeEach('insert users', () => {
            return db
                .insert(testUsers)
                .into('users')
        })
        it(`Given valid login credentials, responds with 200`, () => {

            const login = {
                "email": 'lucy@gmail.com',
                "password": "rac-password"
            }


            return supertest(app)
                .post('/api/auth/login')
                .send(login)
                .expect(200)
        })
    })

})
