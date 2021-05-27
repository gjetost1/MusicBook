'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Venues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(30),

      },
      owner_id: {
        type: Sequelize.INTEGER,

        references: { model: 'Users' }
      },
      venueImg: {
        type: Sequelize.STRING(999),
        allowNull: true
      },
      capacity: {
        type: Sequelize.INTEGER,

      },
      venueType: {
        type: Sequelize.STRING(20),

      },
      pay: {
        type: Sequelize.STRING(20),

      },
      city: {
        type: Sequelize.STRING(30),

      },
      state: {
        type: Sequelize.STRING(30),

      },
      street: {
        type: Sequelize.STRING(30),

      },
      lat: {
        type: Sequelize.STRING(50),

      },
      lng: {
        type: Sequelize.STRING(50),

      },
      description: {
        type: Sequelize.TEXT,

      },
      rating: {
        type: Sequelize.NUMERIC(3, 2),

      },
      createdAt: {

        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {

        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Venues');
  }
};
