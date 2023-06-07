const bookController = require('../controllers/bookController');

const router = require('express').Router();


router.post('/', bookController.createBook);


module.exports = router;