const {user} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('../helper/jwt')

module.exports = class {
    static async register(req, res, next) {
        user.create(req.body)
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'New User Created!',
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }
    static async login (req, res, next) {
        try {
            const admin = await user.findOne({where: {email: req.body.email}})
            if (!admin) {
               res.status(404).send({
                status: 404,
                message: 'admin not found!',
               }) 
            }

            const isValidPassword = await bcrypt.compare(req.body.password, admin.password)

            if (!isValidPassword) {
                res.status(404).send({
                    status: 400,
                    message: 'Email and password not match!',
                   }) 
            }
            const token = jwt.generateToken({email: admin.email, password: admin.password})
            const secureadmin = admin.dataValues
            delete secureadmin.password

            res.status(200).send({
                status: 200,
                message: 'admin found!',
                data: {
                    admin: secureadmin,
                    token: token
                }
               }) 
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    static async getAllUser(req, res, next) {
        user.findAll({
            where: {...req.query}
        })
                .then((result) => {
                    res.status(200).send({
                        status: 200,
                        data: result,
                    })
                })
            .catch((err) => {
                res.status(400).send(err)
            })
    }
}