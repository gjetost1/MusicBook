'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venues', [
      {
        name: '331 Club',
        owner_id: 1,
        venueImg: "https://s3-media0.fl.yelpcdn.com/bphoto/cekGiol3aWBj6XmvPyw4FQ/o.jpg",
        capacity: 80,
        venueType: 'Bar',
        pay: 200,
        city: 'Minneapolis',
        state: 'Minnesota',
        description: "Live music every night and no cover? Sweet, count me in! This is a great spot to stop by at any point in the night. The crowd changes depending on the music, but each time I've visited, everyone's been great. It does get crowded, but the staff are well-versed in serving up your drink(s) fast after you politely elbow your way to the bar.",
        rating: 5
      },

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Venues', null, {});
  }
};
