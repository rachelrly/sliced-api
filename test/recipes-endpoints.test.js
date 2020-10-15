const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')
const { expect } = require('chai')
const supertest = require('supertest')

describe('Recipe Endpoints', function () {

    let db;

    const testUsers = [...helpers.usersArr];
    const testUser = testUsers[0]
    const testRecs = helpers.recipeArr;
    const testRec = testRecs[0]
    const testIngredients = helpers.ingredientsArr;

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

    describe(`GET /api/recipes/:user`, () => {
        beforeEach('insert users', () => {
            return db
                .insert(testUsers)
                .into('users')
        })


        beforeEach('insert recipes', () => {
            return db
                .insert(testRecs)
                .into('user_recipes')
        })

        it(`Given there are recipes, it responds with 200 and all recipes`, () => {
            const recArr = testRecs.map((rec) => {
                return helpers.makeExpectedRecipes(rec)
            })
            return supertest(app)
                .get(`/api/recipes/${testUser.id}`)
                .expect(200, recArr)

        })

    })

    describe(`POST /api/recipes:user`, () => {
        beforeEach('insert users', () => {
            return db
                .insert(testUsers)
                .into('users')
        })

        it(`Given propor input data, it responds with a 201`, () => {
            const recipe = {
                id: '1234',
                title: 'recipe',
                user_id: testUser.id,
                original_url: '',
                ingredients: [
                    {
                        title: 'ingredient 1',
                        amount_str: '1 cup',
                        recipe_id: '1234'
                    },
                    {
                        title: 'ingredient 2',
                        amount_str: '1 cup',
                        recipe_id: '1234'
                    },
                    {
                        title: 'ingredient 3',
                        amount_str: '1 cup',
                        recipe_id: '1234'
                    },
                ]
            }
            return supertest(app)
                .post(`/api/recipes/${testUser.id}`)
                .send(recipe)
                .expect(201)
        })

    })

    describe(`GET /api/recipes/:user/:id`, () => {
        beforeEach('insert users', () => {
            return db
                .insert(testUsers)
                .into('users')
        })


        beforeEach('insert recipes', () => {
            return db
                .insert(testRecs)
                .into('user_recipes')
        })

        it('Given there are recipes, gets recipes by id', () => {

            const recipe = {
                id: testRec.id,
                title: testRec.title,
                original_url: testRec.original_url,
                created: testRec.date_created
            }
            return supertest(app)
                .get(`/api/recipes/${testUser.id}/${testRec.id}`)
                .expect(200, recipe)
        })

    })

    describe(`DELETE /api/recipes/:user/:id`, () => {

        beforeEach('insert users', () => {
            return db
                .insert(testUsers)
                .into('users')
        })


        beforeEach('insert recipes', () => {
            return db
                .insert(testRecs)
                .into('user_recipes')
        })

        it('Given there are recipes, it deletes recipe by id and responds with 204', () => {

            return supertest(app)
                .delete(`/api/recipes/${testUser.id}/${testRec.id}`)
                .expect(204)

        })


    })

    describe(`GET /api/recipes/:user/:id/ingredients`, () => {
        beforeEach('insert users', () => {
            return db
                .insert(testUsers)
                .into('users')
        })

        beforeEach('insert recipes', () => {
            return db
                .insert(testRecs)
                .into('user_recipes')
        })

        beforeEach('insert ingredients', () => {
            return db
                .insert(testIngredients)
                .into('recipe_ingredients')
        })

        it('Given there are recipes with ingredients, it gets all ingredients for recipe by recipe id', () => {
            const expected = testIngredients.map(ing => helpers.makeExpectedIng(ing));

            return supertest(app)
                .get(`/api/recipes/${testUser.id}/${testRec.id}/ingredients`)
                .expect(200, expected)

        })

    })

})
