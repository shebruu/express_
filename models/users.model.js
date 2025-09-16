const sequelize = require("../config/database");
const { DataTypes } = require('sequelize');

const users = (sequelize) => {
    return sequelize.define('Users',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            firstname: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            allias: {
                type: DataTypes.STRING(50),
                unique: true,
            },
        },
        {
            timestamps: true,
            paranoid: false,
           
        }
    );
};



module.exports = users;

// `sequelize.define` also returns the model
console.log(users === sequelize.models.Users); // true