const router = require('expres').Router();
const authController = require('../controllers/authcontroller');

//importamos solo register
//const {  }

router.post('/register', authController.register);
router.post('./login', authController.login)

module.exports = router;