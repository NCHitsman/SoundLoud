'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [{
      name: '1234',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621617135/osquinn_-_1234_w_ericdoa_midwxst_outby16_illa_cortdot_clfrvs.mp3',
      createdBy: 3,
      views: 50,
      category: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'skinz',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621871216/8485_-_skinz_prod._powerdoll_ufatss.mp3',
      createdBy: 2,
      views: 450,
      category: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'I want this song 2 never end',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621871220/8485_i_want_the_song_2_never_end_Prod_by_phixel_bh9z1v.mp3',
      createdBy: 2,
      views: 350,
      category: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: '115',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621871229/8485_-_115fromtheheart_wywgnb.mp3',
      createdBy: 2,
      views: 250,
      category: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hangar',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621871240/8485_-_hangar_figc9e.mp3',
      createdBy: 2,
      views: 150,
      category: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
