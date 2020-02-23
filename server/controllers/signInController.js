const { users } = require('../models')
// const users = require('../models')

module.exports = {
    signInControl: async(req, res) => {
        let exist = await users.findOne({where: req.body})

        if(exist){
            req.session.userid = exist.dataValues.id
            res.status(200).send('exist')
        }else{
            res.status(404).send('NOT FOUND')
        }
    }
}