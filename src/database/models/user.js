'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT('tiny'),
    phone: DataTypes.STRING,
    employeNumber: DataTypes.STRING,
    hiredAt: DataTypes.DATEONLY,
    deleted: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
