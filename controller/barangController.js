const {barangs} = require('../models')

module.exports = class {
    static async createBarangs(req, res, next) {
        barangs.create({
            nama: req.body.nama,
            harga: req.body.harga,
            deskripsi: req.body.deskripsi,
            tipe: req.body.tipe,
            available: true,
            createdBy: req.adminlogin.id
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'Barangs baru terupload!',

                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }
    static async getAllBarangs(req, res, next) {
        barangs.findAll({
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

    static async getBarangsAvail(req, res, next) {
        barangs.findAll({
            where: {available: true}
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

    static async updateBarangs(req, res, next) {
    try{
        barangs.update({...req.body,UpdatedBy: req.adminlogin.id},{where: {id: req.params.id},returning: true})
              res.status(201).send({
                status: 201,
                message: 'Data barang diupdate!',
                data: barangs.body
            })
    }
    catch(err){
        res.status(500).send(err)
    }
    }
    static async deleteBarangs(req, res, next) {
        try{
            const delBarangs = barangs.update({deletedBy: req.adminlogin.id, available: false},{where: {id: req.params.id},returning: true})
                  res.status(201).send({
                    status: 201,
                    message: 'Data barangs dihapus!',

                    data: delBarangs.body
                })
        }
        catch(err){
            res.status(500).send(err)
        }
        }

}