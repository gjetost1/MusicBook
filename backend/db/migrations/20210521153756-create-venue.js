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
        type: DataTypes.STRING(30),
        allowNull: false
      },
      owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      venueImg: {
        type: DataTypes.STRING(999),
        allowNull: false
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      venueType: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      pay: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      rating: {
        type: DataTypes.NUMERIC(3, 2),
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
