const _users = require("./users.model");
const _brands = require("./brands.model");
const _cars = require("./cars.model");

const initModels = (sequelize) => {
    //db 
    const Users = _users(sequelize);
    const Brands = _brands(sequelize);
    const Cars = _cars(sequelize);

    // Associations
    Cars.belongsTo(Brands, { foreignKey: 'brand_id', as: 'brand' });
    Brands.hasMany(Cars, { foreignKey: 'brand_id', as: 'cars' });

    return {
        Users,
        Cars,
        Brands
    };
};

module.exports = initModels;
