/** @format */

const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// exporto el modelo
// defino el modelo
module.exports = (sequelize) => {
   sequelize.define("books", {
      id: {
         type: DataTypes.STRING,
         primaryKey: true,
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      authors: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      description: {
         type: DataTypes.STRING,
      },
      pagecount: {
         type: DataTypes.INTEGER,
      },
      imagelink: {
         type: DataTypes.STRING,
      },
      language: {
         type: DataTypes.STRING,
      },
      price: {
         type: DataTypes.DECIMAL,
      },
   });
};
