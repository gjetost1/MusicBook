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
        allowNull: false
      },
      owner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      venueImg: {
        type: Sequelize.STRING(999),
        allowNull: true
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      venueType: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      pay: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      street: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      lat: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      lng: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      rating: {
        type: Sequelize.NUMERIC(3, 2),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Venues');
  }
};
