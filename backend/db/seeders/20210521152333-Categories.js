'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'PopPunk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pop',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chillstep',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
