const { User } = require('../models');
const bcrypt = require ('bcrypt');
const authController = {};

authController.register = async(req,res) => {
    console.log(req.body);

    if(req.body.password.length < 4) {
        return res.send('La pasword debe tener al menos 4 caracteres alfanuméricos')
    }

    const newPassword = bcrypt.hashSync(req.body.password, 8)

    const newUser = await User.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
            role_id: 1
        }
    );


    return res.send(newUser);
}

authController.login = async (req, res) => {
    try {
        const { email, pasword } = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        })

        return res.send('User logged');
    } catch (error) {
        return res.send('Something went wrong login user ' + error.message)
    }
}
console.log(user)




module.export = authController