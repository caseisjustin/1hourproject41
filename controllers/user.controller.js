import query from "../services/user.service.js"


export const getAllusers = async (req, res)=>{
    try {
        const users = await query.getAllusers()
        res.status(200).send(users)
    } catch (err) {
        res.send("An error occured")
    }
}

export const getUserByLogin = async (req, res) => {
    try {
        const {login} = req.body
        let result = await query.getUserByLogin(login.login)
        result = result[0]
        if(result.length = 0){
            res.send("User not found!")
        }
        else{
            res.status(200).send(result)
        }
    } catch (err) {
        res.send("An error occured")
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, login, password } = req.body
        if(!name || !login || !password){
            res.status(400).send("bad request!")
        }
        const response = await query.addUser(name, login, password)
        res.send("added", response[0])
    }
    catch(err){
        res.status(500).send(err)
    }
}


export const updateUser = async (req, res) => {
    try {
        const {name, login, password} = req.body
        let response = await query.updateUser(name, login, password)
        res.send("Updated!", response[0])
    } catch (err) {
        res.send("An error occured")
    }
}

export const deleteUser = async (req, res) => {
    try {
        const login = req.body.login
        const result = await query.deleteUser(login)
        res.send("Deleted", result[0])
    } catch (err) {
        res.send("An error occured!")
    }
}