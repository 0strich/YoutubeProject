const { users } = require('../models')

module.exports = {
    signUpControl: async(req, res) => {
        let exist = await users.findOne({where: {email: req.body.email}})

        console.log(req.body)

        if(exist){
            res.status(409).send('Email Exist')
        }else{
            let register = await users.create(req.body)
            res.status(200).send('register succeed')
        }
    }
}