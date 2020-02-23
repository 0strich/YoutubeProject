const { users } = require('../models')

module.exports = {
    userControl: async(req, res) => {
        if(req.session.userid){
            const info = await users.findOne({where: {id: req.session.userid}})
            const {email, username, mobile} = info.dataValues
            const userinfo = {
                email: email,
                username: username,
                mobile: mobile
            }
            console.log(userinfo)
            res.status(200).send(userinfo)
        }else{
            res.status(404).send('NOT FOUND')
        }
    }
}