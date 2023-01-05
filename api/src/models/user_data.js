const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
   sequelize.define(
      "userdata",
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
         },
         firstname: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         lastname: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         age: {
            type: DataTypes.INTEGER(3),
            allowNull: false,
         },
         dni: {
            type: DataTypes.CHAR,
            validate: { isAlpha: true },
         },
         city: {
            type: DataTypes.STRING,
            validate: { isAlpha: true },
         },
         postalcode: {
            type: DataTypes.INTEGER,
            validate: { isNumeric: true, len: [1, 6] },
         },
         mobile: {
            type: DataTypes.INTEGER,
            validate: { isNumeric: true, len: [1, 11] },
         },
      },
      {
         timestamps: false,
      }
   );
};
