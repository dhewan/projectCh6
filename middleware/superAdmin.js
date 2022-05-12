const jwt = require('../helper/jwt')
const { user } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const payload = jwt.verifyToken(req.headers.token)
        if (!payload) {
            res.status(404).send({ message: 'user not found' })
        }
        const admin = await user.findOne({
            where: { email: payload.email, password: payload.password },
        })
        if (!admin) {
            res.status(404).send({ message: 'user not found' })
        } else if (admin.dataValues.level==="superadmin"){
            req.adminlogin = admin.dataValues
            next() 
        }else{
         res.status(404).send({ message: 'user not found' })
        }
    } catch (err) {
        res.status(404).send({
            status: 404,
            message: 'User not found',
        })
    }
}
