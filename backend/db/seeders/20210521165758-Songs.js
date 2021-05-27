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
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1621871216/8485_-_skinz_prod._powerdoll_ufatss.mp3',
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
    },{
      name: 'Justin Caruso - High Enough (Feat. Rosie Darling)(Adam Pearce Remix)',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1622138200/Justin_Caruso_-_High_Enough_Adam_Pearce_Remix_qw7vsf.mp3',
      createdBy: 4,
      views: 1026,
      category: 2,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1622138203/88c5229b83480b3b7219ccd484023f02.500x500x1_k9y5vq.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Another Day In Paradise (Prod. by ayokay)',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1622138409/Quinn_XCII_-_Another_Day_In_Paradise_Prod._ayokay_g9l1lt.mp3',
      createdBy: 5,
      views: 10226,
      category: 2,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1622138398/artworks-000135047374-m3wzh4-t500x500_rknavm.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Violins (Prod. ayokay)',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1622138501/Quinn_XCII_-_Violins_Prod._ayokay_aqqzv1.mp3',
      createdBy: 5,
      views: 626,
      category: 2,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1622138484/artworks-000132487922-lkc838-t500x500_w5zxpc.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Atlas',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1622138644/Faux_Tales_-_Atlas_hqmu8a.mp3',
      createdBy: 6,
      views: 8226,
      category: 3,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1622138647/artworks-000076491804-8tfa8h-t500x500_bg6pm3.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Circles',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1622138765/Quinn_XCII_-_Full_Circle_Prod._ayokay_kvvdth.mp3',
      createdBy: 5,
      views: 3226,
      category: 2,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1622138707/artworks-000135046544-418b36-t500x500_rtdh4j.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'thingsudo2me',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1622148905/i5wbhivx4zqmjejmceuj.mp3',
      createdBy: 7,
      views: 13226,
      category: 1,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1622148931/n0khvmqgtltwgxprkxvk.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'likewise',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1622149348/likewise_aae088.mp3',
      createdBy: 7,
      views: 8356,
      category: 1,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1622149338/ab67616d00001e0230646dbd45aa0a89040b78a8_pj1xlo.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'cloak n dagger',
      link: 'https://res.cloudinary.com/hitsman/video/upload/v1622149471/glaive_x_ericdoa_-_cloak_n_dagger_qkqsxn.mp3',
      createdBy: 7,
      views: 5356,
      category: 1,
      cover: 'https://res.cloudinary.com/hitsman/image/upload/v1622149461/artworks-PMQNpgrOg0yDphrI-1Bl7hQ-t500x500_ntdsxr.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
