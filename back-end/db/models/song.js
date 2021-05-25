'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING(100),
    link: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    category: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.User, {
      foreignKey: 'createdBy'
    })
    Song.belongsTo(models.Category, {
      foreignKey: 'category'
    })
    Song.hasMany(models.Comment, {
      foreignKey: 'songId'
    })
  };
  return Song;
};
