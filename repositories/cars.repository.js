const { models: { Cars } } = require("../models/");


//INTERNAL
findNextId = () => {
    const car = data?.at(-1);
    if (!car) return 1;
    else return car.id + 1;
  };
  //
  
  findAll = () => {
    return Cars.findAll({ paranoid: false });
  };
  
  findById = (id) => {
    return Cars.findByPk(id);
    
  };
  

  

const findFiltered = (filters) => {

  return Cars.findAll({ where: filters });
};

const create = (car) => {
  return Cars.create(car);
  };
  

const update = (currentCar, car) => {
  currentCar.model = car.model ?? currentCar.model;
  currentCar.hp = car.hp ?? currentCar.hp;
  currentCar.year = car.year ?? currentCar.year;
  currentCar.brand = car.brand ?? currentCar.brand;
  if(car.brand !== "undefined") currentCar.brand = car.brand;
  return currentCar.save(car);
}

const remove = (car) => {
  car.destroy();
}
  
  module.exports = {
    findAll,
    findFiltered,
    findById,
    create,
    update,
    remove,
  };
  