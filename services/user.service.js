import user from '../models/user.model.js';


// TO GET only one data (name || login || password || createdAt)
const getSpecData = async (login, data) => {
    let userresult = await user.find({"login": login}, {[data]: 1})
    console.log(userresult)
    return userresult
}

// To get all users
const getAllusers = async ()=>{
    const users = await user.find()
    if(users)
        return users
    else
        return false
}

// get user info by login
const getUserByEmail = async (login) => {
    const userresult = await user.find({"login": login})
    return userresult
}

// create new user
const addUser = async (name, login, password) => {
    const response =  await user({name, login, password})
    return response
}

// update existing user
const updateUser = async (name, login, password) => {
    const updater = {}
    updater.name = name ? name : await getSpecData(login, "name")
    updater.password = password ? password : await getSpecData(login, "password")
    const response = await user.updateOne({login: login}, updater)
    return response
}

const deleteUser = async (login) => {
    user.findOneAndDelete({"login": login})
}

export default {
    getAllusers,
    addUser,
    getUserByEmail,
    updateUser,
    deleteUser
}
