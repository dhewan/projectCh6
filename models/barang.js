'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class barangs extends Model {}
  barangs.init({
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    deskripsi: DataTypes.STRING,
    tipe: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    deletedBy: DataTypes.STRING,
    UpdatedBy: DataTypes.STRING
  }, {
    sequelize
  });
  return barangs;
};