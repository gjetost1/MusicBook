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

    },
    owner_id: {
      type: DataTypes.INTEGER,

      references: { model: 'Users' }
    },
    venueImg: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    capacity: {
      type: DataTypes.INTEGER,

    },
    venueType: {
      type: DataTypes.STRING(20),

    },
    pay: {
      type: DataTypes.STRING(20),

    },
    city: {
      type: DataTypes.STRING(30),

    },
    state: {
      type: DataTypes.STRING(30),

    },
    street: {
      type: DataTypes.STRING(30),

    },
    lat: {
      type: DataTypes.STRING(50),

    },
    lng: {
      type: DataTypes.STRING(50),

    },
    description: {
      type: DataTypes.TEXT,

    },
    rating: {
      type: DataTypes.NUMERIC(3, 2),

    },
  }, {});
  Venue.associate = function(models) {
    Venue.belongsTo(models.User, { foreignKey: 'owner_id' });
    Venue.hasMany(models.Booking, { foreignKey: 'venue_id' });

  };
  return Venue;
};
