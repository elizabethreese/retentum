'use strict';
module.exports = (sequelize, DataTypes) => {
  const prospects = sequelize.define('prospects', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    caseType: DataTypes.STRING,
    comments: DataTypes.STRING,
    notes: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  prospects.associate = function(models) {
    // associations can be defined here
  };
  return prospects;
};