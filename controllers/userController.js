const { User } = require('../models')

const userController = {};

userController.getAllUsers = async(req, res) => {
    try {
        const user = await User.findAll();

        return res.json({
            success: true,
            message: "users retrieved",
            data: users
        })
    } catch (error) {
        return res.status(500).json(
            {
                succes: false,
                message: "User cant be retreaved",
                error: error
            }
        )
    }
};

module.exports = userController;