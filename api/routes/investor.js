const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investor');
const checkAuth = require('../middlewares/checkAuth');

router.post('/signup', investorController.signup);
router.post('/login', investorController.login);
router.get('/profile',checkAuth, investorController.profile);

module.exports = router;
