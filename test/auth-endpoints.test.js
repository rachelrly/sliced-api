const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe.skip('Auth Endpoints', function () {
    let db

    const testUsers = helpers.usersArr;
    const testUser = testUsers[0];

    before('knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
        app.set('db', db)
    })

    // after('destroy db', () => db.destroy());

    //  beforeEach('cleanup', () => helpers.cleanTables(db))

    //afterEach('cleanup', () => helpers.cleanTables(db))

    describe(`POST /api/auth/login`, () => {
        beforeEach('insert users', () => {
            helpers.seedUsers(
                db,
                testUsers
            )
        })

        const required = ['email', 'password'];
        required.forEach(r => {
            const loginAttemptBody = {
                email: testUser.email,
                password: testUser.password
            }

            it(`Request is missing '${r}'`, () => {
                delete loginAttemptBody[r]

                return supertest(app)
                    .post('/api/auth/login')
                    .send(loginAttemptBody)
                    .expect(400, {
                        error: `Request is missing '${r}'`,
                    })
            })
        })
    })

})