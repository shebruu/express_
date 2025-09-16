const _users = require("./users.model");
const _cars = require("./cars.model");

const initModels = (sequelize) => {
    //db 
    const Users = _users(sequelize);
    const Cars = _cars(sequelize);

    return {
        Users,
        Cars
    };
};

module.exports = initModels;
