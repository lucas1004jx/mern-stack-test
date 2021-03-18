const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../controllers/user.controller');

const { getCurrentUser } = UserController;

router.route('/profile').all(passport.authenticate('jwt',{session:false})).get(getCurrentUser);

module.exports = router;