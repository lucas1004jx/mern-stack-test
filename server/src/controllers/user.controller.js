const user = require('../models/user');
const User = require('../models/user');
const {matchPassword} = require('../utils/matchPassword');
const jwt = require('jsonwebtoken');


const userSignIn = async (req,res) => {
	console.log('user sign in', req.body);
	const {email,password} = req.body;
	const user = await User.findOne({email:email});
	if(!user) return res.status(404).json({message:'The user not found'});
	const match = await matchPassword(password,user.password);
	if(!match) return res.status(400).json({message:'Password incorrect'});
	console.log('process.env',process.env.JWT_SECRET);
	console.log('user',user);

	const jwt_payload = {id:user._id,email:user.email};
	// sign token
	jwt.sign(
		jwt_payload,
		process.env.JWT_SECRET,
		{expiresIn:3600},
		(err,token)=>{
			res.status(200).json({
				success:true,
				token: `Bearer ${token}`
			});
		});
	
};

const userSignUp = async (req,res) => {
	console.log('user sign up', req.body);
	const {email,password,confirmedPassword} = req.body;
	const errors = [];

	if(password !== confirmedPassword){
		errors.push('Password doesn\'t match');
	}
	if(password.length < 6){
		errors.push('The password should at least have 6 characters');
	}

	if(errors.length > 0) {
		return res.status(400).json({ message: errors.join() });
	}

	const userEmail = await user.findOne({email:email});

	if(userEmail){
		return res.status(409).json({message:'User already exists'});
	}

	const newUser = new User({ email, password});
	
	await newUser.save();
	
	res.status(200).json({email});
};

const getCurrentUser = (req,res) => {
	const {email,dateAdded} = req.user;
	res.status(200).json({
		email,
		dateAdded
	});
};

module.exports = {
	userSignIn,
	userSignUp,
	getCurrentUser
};