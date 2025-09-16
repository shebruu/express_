const serviceCallResult = require("../responses/serviceCallResult.response");
const userRepository = require("../repositories/user.repository");


const findAll = async (filters={}) => {
    const {firstname} = filters;
    
    if(firstname) {
        const result = await userRepository.findFiltered(firstname)
        return serviceCallResult.ok(result)
    }

    const result = await userRepository.findAll()
    return serviceCallResult.ok(result)
}

const findOneById = async (id) => {
    const user = await userRepository.findById(id)

    if(!user) return serviceCallResult.notFound(`user with id #${id} not found`)

    return serviceCallResult.ok(user)
}

const create = async (user = {}) => {
    const { firstname, allias } = user;
    let error = "";

    if (firstname && allias) {
        await userRepository.create(user);
        return serviceCallResult.created();
    } else if (!firstname && !allias) error = "user must have a firstname and an allias";
    else if (!firstname) error = "user must have a firstname ";
    else if (!allias) error = "user must have an allias ";

    return serviceCallResult.badRequest(error);
};

const update = async (id, newuser={}) => {
    const user = await userRepository.findById(id)

    if(!user) return serviceCallResult.notFound(`user with id #${id} not found`)
    
    await userRepository.update(user, newuser)

    return serviceCallResult.noContent()
}

const remove = async (id) => {
    const user = await userRepository.findById(id)

    if(!user) return serviceCallResult.notFound(`user with id #${id} not found`)

    await userRepository.remove(user)
    return serviceCallResult.noContent()
}

module.exports = {
    findAll, findOneById, create, update, remove
}