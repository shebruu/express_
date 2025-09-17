const {
  models: { brand },
} = require("../models");

const findAll = () => {
  return brand.findAll();
};

const findAllFiltered = (filters) => {
  const where = {};
  if (filters.name) {
    where.name = filters.name;
  }
  return brand.findAll({ where });
};

const findById = (id) => {
  return brand.findByPk(id);
};

const create = (newBrand) => {
  return brand.create(newBrand);
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
