'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: '8485@user.io',
        username: '8485',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'osquinn@user.io',
        username: 'osquinn',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'AdamPearce@user.io',
        username: 'Adam Pearce',
        hashedPassword: 'password',
      },{
        email: 'QuinnXCII@user.io',
        username: 'Quinn XCII',
        hashedPassword: 'password',
      },{
        email: 'FauxTales@user.io',
        username: 'Faux Tales',
        hashedPassword: 'password',
      },
      {
        email: 'ericdoa@user.io',
        username: 'ericdoa',
        hashedPassword: 'password',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
