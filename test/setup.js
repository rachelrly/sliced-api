require('dotenv').config()
const { expect } = require('chai')
process.env.TZ = ''
process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'jwt-test-secret'