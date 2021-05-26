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
        street: '331 13th Ave NE',
        lat: "45.001218197841986",
        lng: "-93.26293777513916",
        description: "Live music every night and no cover? Sweet, count me in! This is a great spot to stop by at any point in the night. The crowd changes depending on the music, but each time I've visited, everyone's been great. It does get crowded, but the staff are well-versed in serving up your drink(s) fast after you politely elbow your way to the bar.",
        rating: 5
      },
      {
        name: `Palmer's Bar`,
        owner_id: 1,
        venueImg: "https://s3-media0.fl.yelpcdn.com/bphoto/cekGiol3aWBj6XmvPyw4FQ/o.jpg",
        capacity: 80,
        venueType: 'Bar',
        pay: 300,
        city: 'Minneapolis',
        state: 'Minnesota',
        street: '331 13th Ave NE',
        lat: "44.96874705677097",
        lng: "-93.24746398653501",
        description: "Find the truth on the West Bank",
        rating: 5
      },
      {
        name: `Day Block Brewing Company`,
        owner_id: 1,
        venueImg: "https://s3-media0.fl.yelpcdn.com/bphoto/cekGiol3aWBj6XmvPyw4FQ/o.jpg",
        capacity: 80,
        venueType: 'Restaurant',
        pay: 300,
        city: 'Minneapolis',
        state: 'Minnesota',
        street: '500 Cedar Ave',
        lat: "44.97531420929294",
        lng: "-93.25305563757676",
        description: "Killer beer, killer music, killer pizza, killer bees.",
        rating: 4
      },
      {
        name: `Anoka Hardware Store`,
        owner_id: 1,
        venueImg: "https://s3-media0.fl.yelpcdn.com/bphoto/cekGiol3aWBj6XmvPyw4FQ/o.jpg",
        capacity: 30,
        venueType: 'Bar',
        pay: 300,
        city: 'Anoka',
        state: 'Minnesota',
        street: '201 Jackson St Suite 101',
        lat: "45.19958537984698",
        lng: "-93.38944183236933",
        description: "Fancy cocktails in fancy digs.",
        rating: 5
      },
      {
        name: `Junior's`,
        owner_id: 1,
        venueImg: "https://s3-media0.fl.yelpcdn.com/bphoto/cekGiol3aWBj6XmvPyw4FQ/o.jpg",
        capacity: 30,
        venueType: 'Bar',
        pay: 400,
        city: 'River Falls',
        state: 'Wisconsin',
        street: '414 S Main St',
        lat: "44.854899549436155",
        lng: "-92.62768957990956",
        description: "Great patio, great food. ",
        rating: 5
      },
      {
        name: `Island City Brewing Company`,
        owner_id: 1,
        venueImg: "https://s3-media0.fl.yelpcdn.com/bphoto/cekGiol3aWBj6XmvPyw4FQ/o.jpg",
        capacity: 30,
        venueType: 'Bar',
        pay: 400,
        city: 'Winona',
        state: 'Minnesota',
        street: '65 E Front Street',
        lat: "44.053857437357735",
        lng: "-91.63443216089495",
        description: "Yay, beer by the river. What more could you want? Very metallic sounding room on account of all the tanks. ",
        rating: 5
      },
      {
        name: `Brigid's Pub`,
        owner_id: 1,
        venueImg: "https://s3-media0.fl.yelpcdn.com/bphoto/cekGiol3aWBj6XmvPyw4FQ/o.jpg",
        capacity: 110,
        venueType: 'Restaurant',
        pay: 600,
        city: 'Bemidji',
        state: 'Minnesota',
        street: '317 Beltrami Ave NW',
        lat: "47.47150795908901",
        lng:  "-94.88137972030037",
        description: "Surprisingly attentive crowd for a restaurant, good stage positioning.",
        rating: 5
      },
      {
        name: `Hotel Donaldson`,
        owner_id: 1,
        venueImg: "https://s3-media0.fl.yelpcdn.com/bphoto/cekGiol3aWBj6XmvPyw4FQ/o.jpg",
        capacity: 90,
        venueType: 'Restaurant',
        pay: 600,
        city: 'Fargo',
        state: 'North Dakota',
        street: '101 Broadway N',
        lat: "46.877256891520496",
        lng:  "-96.78720148694562",
        description: "Chic hotel with great rooms and a very attentive audience.",
        rating: 5
      },

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Venues', null, {});
  }
};
