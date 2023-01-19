const User = require('../../model/User')

const UserController = {
    async createUser(req, res){
        const bodyData = req.body

        try{
            const newUser = await User.create(bodyData)
            return res.status(200).json(newUser)
        }
        catch(err){
            return res.status(400).json(err)
        }
    },

    async getUser(req, res){
        try{
            const allUsers = await User.find()
            return res.status(200).json(allUsers)
        }
        catch(err){
            return res.status(400).json(err)
        }
    }

}

module.exports = UserController