process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'jwt-test-secret'

require('dotenv').config()
const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect;
global.supertest = supertest;
