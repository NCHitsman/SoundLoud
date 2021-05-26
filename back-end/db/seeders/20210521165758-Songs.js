'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [{
      name: '1234',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621617135/osquinn_-_1234_w_ericdoa_midwxst_outby16_illa_cortdot_clfrvs.mp3',
      createdBy: 3,
      views: 56,
      category: 1,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1621980507/e652181870e5692a8aa3e020b156e58c.500x500x1_lcs7n4.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'skinz',
      link: 'https://res.cloudinary.com/hitsman/image/upload/v1621980516/12f5bdef38f33aa19150a69ffedec203.500x500x1_pixqfh.jpg',
      createdBy: 2,
      views: 136,
      category: 1,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1621980516/12f5bdef38f33aa19150a69ffedec203.500x500x1_pixqfh.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'I want this song 2 never end',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621871220/8485_i_want_the_song_2_never_end_Prod_by_phixel_bh9z1v.mp3',
      createdBy: 2,
      views: 234,
      category: 1,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1621980513/7a3208d237e7a6d4503a2b683b70e230.1000x1000x1_zulznd.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: '115',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621871229/8485_-_115fromtheheart_wywgnb.mp3',
      createdBy: 2,
      views: 1032,
      category: 1,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1621980522/artworks-amf9jmq0ZkVsb5ys-VICN1Q-t500x500_yvjwp9.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hangar',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621871240/8485_-_hangar_figc9e.mp3',
      createdBy: 2,
      views: 10,
      category: 1,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1621980525/96e991e9584a9ab6ddd9706f59b46f0b.300x300x1_ephbxo.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
