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



module.export = authController