const User = require('../models/user');

const userSignIn = (req,res) => {
	console.log('user sign in', req.body.user);
	res.send('user sign in');
};

const userSignUp = async (req,res) => {
	console.log('user sign up', req.body.user);
	const {email,password,confirmedPassword} = req.body.user;
	const errors = [];

	if(password !== confirmedPassword){
		errors.push('Password doesn\'t match');
	}
	if(password.length < 6){
		errors.push('The password should at least have 6 characters');
	}

	if(errors.length > 0) {
		return res.status(400).send({ message: errors.join() });
	}

	const newUser = new User({ email, password});
	
	newUser.password = await newUser.encryptPassword(password);
	await newUser.save();
	res.status(200).send(newUser);
};

module.exports = {
	userSignIn,
	userSignUp
};