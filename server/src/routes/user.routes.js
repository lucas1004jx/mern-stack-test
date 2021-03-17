const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../controllers/user.controller');

const {userSignIn,userSignUp, getCurrentUser} = UserController;

router.route('/signin').post(userSignIn);
router.route('/signup').post(userSignUp);
router.route('/profile').all(passport.authenticate('jwt',{session:false})).get(getCurrentUser);

module.exports = router;