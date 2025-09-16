const { models: { Users } } = require("../models");
//INTERNAL
findNextId = () => {
  const user = data?.at(-1);
  if (!user) return 1;
  else return user.id + 1;
};
//


const findAll = () => {
  return Users.findAll();
};



const findById = (id) => {
  return Users.findByPk(id);
};



const create = (user) => {
  return Users.create(user);
};

const findFiltered = (firstname) => {
  return Users.findAll({ where: { firstname } });
};

update = (currentUser, user) => {
  currentUser.firstname = user.firstname ?? currentUser.firstname;
  currentUser.allias = user.allias ?? currentUser.allias;
  return currentUser.save(user);
  /*
    return new Promise((res, rej) => {
        currentUser.firstname = user.firstname;
        currentUser.alias = user.alias;
        res();
    })
        */
}

remove = (user) => {
  /**     return new Promise((res, rej) => {
        data = data.filter(u => u.id != user.id)
        res()
    })
}*/
user.destroy();
}

module.exports = {
  findAll,
  findFiltered,
  findById,
  create,
  update,
  remove,
};
