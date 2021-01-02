module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'developemnt',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://rachel@localhost/sliced_new',
    TEST_DB_URL: process.env.TEST_DB_URL || 'postgresql://rachel@localhost/sliced_test',
    JWT_SECRET: process.env.JWT_SECRET || 'secret'
}