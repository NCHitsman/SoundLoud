'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [{
      name: '1234',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621617135/osquinn_-_1234_w_ericdoa_midwxst_outby16_illa_cortdot_clfrvs.mp3',
      artist: 'osquinn',
      createdBy: 1,
      views: 50,
      category: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
