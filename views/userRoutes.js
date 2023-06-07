const userController = require("../controllers/userController");
const router = require("express").router();

router.get('/', auth, userController.getAllUsers);

module.exports = router;