const _users = require("./users.model");
const _cars = require("./cars.model");
const _brands = require("./brands.model");

const initModels = (sequelize) => {
    //db 
    const Users = _users(sequelize);
    const Cars = _cars(sequelize);
    const Brands = _brands(sequelize);

        //lier les models
         Cars.belongsTo(Brands, { as: 'brand', foreignKey: 'brand_id' })
         Brands.hasMany(Cars, { as: 'cars', foreignKey: 'brand_id' })
    return {
        Users,
        Cars,
        Brands
    };

};

module.exports = initModels;
