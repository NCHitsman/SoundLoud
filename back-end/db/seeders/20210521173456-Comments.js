'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
      text: 'Nice song',
      userId: 3,
      songId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Your voice tunes the life of lifeless people.',
      userId: 5,
      songId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'You are the only person, who I want to listen till my last breathe.',
      userId: 3,
      songId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Such emotion and connection to the song.',
      userId: 4,
      songId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Great passion and talent throughout. You convey emotion well.',
      userId: 2,
      songId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'You conveyed the emotion within the lyrics well.',
      userId: 6,
      songId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Perform as much as you can as you have bags of potential.',
      userId: 1,
      songId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Great musicianship, you play with confidence and vocally you have a really good tone.',
      userId: 6,
      songId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Vocally you have a great tone and really good control on the high notes, a great overall performance.',
      userId: 3,
      songId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Try to vary it more and give us more dynamics to the performance.',
      userId: 4,
      songId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'You have lots of character to your vocal which really assists in delivering the story of the song.',
      userId: 5,
      songId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Your delivery is fantastic which really separates you and makes you stand out from your peers.',
      userId: 6,
      songId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Great power and control are all there!',
      userId: 1,
      songId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Lots of potential with superb power.',
      userId: 4,
      songId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'I keep listening to it over and over again.',
      userId: 3,
      songId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'One of the most beautiful and amazing tracks Ive heard.',
      userId: 4,
      songId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'thanks this will help me ease into sleep and forget the fact that I missed an exam...',
      userId: 5,
      songId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'Only problem with this mix is its too good, I keep listening to the music rather than working, and looking up pieces so I can have them! :)',
      userId: 6,
      songId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'I think this is the most beautiful mix Ive heard',
      userId: 1,
      songId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'perfect.',
      userId: 2,
      songId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
