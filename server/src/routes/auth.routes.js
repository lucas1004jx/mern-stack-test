const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

const {signIn,signUp} = AuthController;

router.route('/signin').post(signIn);
router.route('/signup').post(signUp);

module.exports = router;