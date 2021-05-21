'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Venues' }
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Rating.associate = function(models) {
    Rating.belongsTo(models.User, { foreignKey: 'user_id' });
    Rating.belongsTo(models.Venue, { foreignKey: 'venue_id' });
  };
  return Rating;
};
