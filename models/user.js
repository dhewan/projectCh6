'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class user extends Model {}
  user.init({
    nama: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: {
          args: true,
          msg: 'Email address already in use!'
      },
  }
  }, {
    hooks: {
        beforeCreate : (record, options) => {
        record.password = bcrypt.hashSync(record.password, 10)
      }
    },
    sequelize
  });
  return user;
};