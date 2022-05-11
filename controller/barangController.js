const {barangs} = require('../models')

module.exports = class {
    static async createBarangs(req, res, next) {
        barangs.create({
            nama: req.body.nama,
            harga: req.body.harga,
            deskripsi: req.body.deskripsi,
            tipe: req.body.tipe,
            available: true,
            createdBy: req.adminlogin.nama
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
        barangs.update({...req.body},{where: {id: req.params.id},returning: true})
        // barangs.update({ UpdatedBy: req.adminlogin.id}) update belum bisa
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
            const delBarangs = barangs.update({...req.body.available},{where: {id: req.params.id},returning: true})
            delBarangs=false
                  res.status(201).send({
                    status: 201,
                    message: 'Data barangs dihapus!',
                    data: update.body
                })
        }
        catch(err){
            res.status(500).send(err)
        }
        }

}