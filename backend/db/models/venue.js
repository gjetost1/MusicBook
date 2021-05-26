'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    street: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    lat: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lng: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.NUMERIC(3, 2),
      allowNull: false,
    },
  }, {});
  Venue.associate = function(models) {
    Venue.belongsTo(models.User, { foreignKey: 'owner_id' });
    Venue.hasMany(models.Booking, { foreignKey: 'venue_id' });

  };
  return Venue;
};
