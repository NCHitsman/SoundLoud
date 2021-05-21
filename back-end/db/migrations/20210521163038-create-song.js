'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      artist: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users'}
      },
      views: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Categories'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};
