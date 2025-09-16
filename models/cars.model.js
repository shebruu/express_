const sequelize = require("../config/database");
const { DataTypes } = require('sequelize');


const cars = (sequelize) => {
    return sequelize.define('Cars',
  {
           
     
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true,
    },
    brand: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING(30),
      allowNull: false,
      
      
    },
    year: {
      type: DataTypes.INTEGER,
      defaultValue: 199,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }},
   
    {paranoid: true}

  );
};


module.exports = cars;
// `sequelize.define` also returns the model
console.log(cars === sequelize.models.Cars); // true