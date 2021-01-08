const AuthService = require('../auth/auth-service');

async function requireAuth(req, res, next) {
    const authToken = req.get('Authorization') || ''
    let bearerToken
    console.log('require auth token', authToken)
    if (!authToken.toLowerCase().startsWith('bearer')) {
        return res
            .status(401)
            .json({ error: 'Missing bearer token' })
    } else {
        bearerToken = authToken.slice(7, authToken.length)
    }

    try {
        console.log('BEFORE PAYLOAD', bearerToken)
        const payload = await AuthService.verifyJwt(bearerToken)

        console.log('PAYLOAD', payload)

        AuthService.getUserWithEmail(
            req.app.get('db'),
            payload.sub,
        )
            .then(user => {
                console.log(user)
                if (!user) {
                    return res
                        .status(401)
                        .json({ error: 'unauthorized request' })
                }

                console.log('USER FROM FUNC', user)
                req.user = user;
                next()
            })
            .catch(err => {
                console.error(err)
                next(err)
            })

    } catch (error) {
        return res
            .status(401)
            .json({ error: 'Unauthorized' })
    }
}

module.exports = requireAuth 
