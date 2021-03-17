const Validator = require('Validator');
const User = require('../models/user');

const validateRegisterInput = async (data) =>{
	const {password = '',confirmedPassword = '', email = ''} = data;
	let errors = [];
	
	
	if(Validator.isEmpty(email) || Validator.isEmpty(password)|| Validator.isEmpty(confirmedPassword) ) {
		errors.push('The required field can\'t be empty ');
	}else{
		//check email if is valid
		if(!Validator.isEmail(email)) {
			errors.push('The email is not valid');
		}

		//check password is valid
		if(!Validator.isLength(password,{min:6,max:30})){
			errors.push('The password should at least have 6 characters');
		}

		//check the 2 passwords are the same 
		if(password !== confirmedPassword){
			errors.push('Password doesn\'t match');
		}
	
	}


	const user = await User.findOne({email:email});

	if(user){
		errors.push('User already exists');
	}

	console.log('validateRegisterInput errors',errors);

	return {
		errors,
		isValid:errors.length === 0
	};
		
};


module.exports = validateRegisterInput;