
const { DataTypes } = require('sequelize');


const brands = (sequelize) => {
  return sequelize.define('Brands',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      }
    },
    {
      tableName: 'brands',
      schema: 'public',
      
    }
  );
};


module.exports = brands;
// `sequelize.define` also returns the model
