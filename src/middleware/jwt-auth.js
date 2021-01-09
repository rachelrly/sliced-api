const AuthService = require('../auth/auth-service');

async function requireAuth(req, res, next) {
    const authToken = req.get('Authorization') || ''
    let bearerToken;
    if (!authToken.toLowerCase().startsWith('bearer')) {
        return res
            .status(401)
            .json({ error: 'Missing bearer token' })
    } else {
        bearerToken = authToken.slice(7, authToken.length)
    }

    try {
        const payload = await AuthService.verifyJwt(bearerToken)

        const user = await AuthService.getUserWithEmail(
            req.app.get('db'),
            payload.sub)
        console.log('USER LINE 20', user)
        if (!user) {
            return res
                .status(401)
                .json({ error: 'unauthorized request' })
        }

        req.user = user;
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ error: 'Unauthorized' })
    }
}

module.exports = requireAuth 
