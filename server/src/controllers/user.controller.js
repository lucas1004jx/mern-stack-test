

const userSignIn = (req,res) => {
	console.log('user sign in', req.body.user);
	res.send('user sign in');
};

const userSignUp = (req,res,next) => {
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

	res.status(200).send(req.body.user);
};

module.exports = {
	userSignIn,
	userSignUp
};