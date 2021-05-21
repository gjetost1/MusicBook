'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ratings', [
      {
        user_id: 2,
        venue_id: 1,
        review: "The 331 club absolutely slams. One of my favorite spots for chill weeknight gigs.",
        rating: 4,
        updatedAt: faker.date.between('2019-09-27', '2020-04-03'),
        createdAt: faker.date.between('2019-09-27', '2020-04-03')
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ratings', null, {});
  }
};
