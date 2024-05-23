import query from "../services/task.service.js"


export const getAllusers = async (req, res)=>{
    try {
        const users = await query.getAllusers()
        res.status(200).send(users)
    } catch (err) {
        res.send("An error occured")
    }
}

export const getUserByEmail = async (req, res) => {
    try {
        const email = req.query
        let result = await query.getUserByEmail(email.email)
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
        const { name, age, email, password } = req.body
        if(!name || !age || !email || !password){
            console.log("OK")
            res.status(400).send("bad request!")
        }
        const response = await query.addUser(name, email, password, age)
        res.send("added")
    }
    catch(err){
        res.status(500).send(err)
    }
}


export const updateUser = async (req, res) => {
    try {
        const {name, age, email, password} = req.body
        let response = await query.updateUser(name, email, password, age)
        console.log(response)
        res.send("Updated!")
    } catch (err) {
        res.send("An error occured")
    }
}