'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.TEXT,
    createdBy: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {foriengKey: 'createdBy'}),
    Comment.belongsTo(models.Song, {foriengKey: 'songId'})
  };
  return Comment;
};
