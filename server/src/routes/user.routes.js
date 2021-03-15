const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

const {userSignIn,userSignUp} = UserController;

router.route('/signin').post(userSignIn);
router.route('/signup').post(userSignUp);

module.exports = router;