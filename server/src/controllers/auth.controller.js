const User = require('../models/user');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const jwt = require('jsonwebtoken');


const signIn = async (req,res) => {
	console.log('user sign in', req.body);
	const {errors,isValid} = await validateLoginInput(req.body);
	if(!isValid) {
		return res.status(400).json({ message: errors });
	}

	const {email} = req.body;

	const user = await User.findOne({email:email});
	
	console.log('user',user);

	const jwt_payload = {
		id:user._id,
		email:user.email,
		dateAdded:user.dateAdded
	};
	// sign token
	jwt.sign(
		jwt_payload,
		process.env.JWT_SECRET,
		{expiresIn:3600},
		(err,token)=>{
			res.status(200).json({
				token
			});
		});
	
};

const signUp = async (req,res) => {
	console.log('user sign up', req.body);
	const {errors,isValid} = await validateRegisterInput(req.body);

	if(!isValid) {
		return res.status(400).json({ message: errors });
	}

	const {email,password} = req.body;

	const newUser = new User({ email, password});
	await newUser.save();
	
	res.status(200).json({email});
};


module.exports = {
	signIn,
	signUp
};