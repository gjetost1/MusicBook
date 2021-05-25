'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
      act: {
        type: Sequelize.STRING(40),
        allowNull: false,

      },
      email: {
        type: Sequelize.STRING(99),
        allowNull: false,
        unique: true,
      },
      bio: {
        type: Sequelize.TEXT
      },
      profileImage: {
        type: Sequelize.STRING(360)
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
