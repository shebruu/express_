const {
  models: {  Brands },
} = require("../models");

const findAll = () => {
  return Brands.findAll();
};

const findAllFiltered = (filters) => {
  const where = {};
  if (filters.name) {
    where.name = filters.name;
  }
  return Brands.findAll({ where });
};

const findById = (id) => {
  return Brands.findByPk(id);
};

const create = (newBrand) => {
  return Brands.create(newBrand);
};

const update = (brand, newBrand) => {
  brand.name = newBrand.name ?? brand.name;

  return brand.update(newBrand);
};

const remove = (brand) => {
  return brand.destroy();
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
