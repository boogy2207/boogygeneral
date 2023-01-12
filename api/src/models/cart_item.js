const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
   sequelize.define(
      "cart_item",
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
         },
         quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
      },
      {
         sequelize,
         paranoid: true,
         timestamps: true,
         // If you want to give a custom name to the deletedAt column
         deletedAt: "destroyTime",
      }
   );
};
