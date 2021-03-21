const Validator = require('Validator');
const User = require('../models/user');
const matchPassword = require('../utils/matchPassword');

const validateLoginInput = async (data) =>{
	const {password = '', email = ''} = data;
	let errors = [];

	//first check the input field is not empty
	if(Validator.isEmpty(email) || Validator.isEmpty(password) ) {
		errors.push('The required field can\'t be empty');
	}else{
		const user = await User.findOne({email:email});
		//check if user exists
		if(!user){
			errors.push('User not exists');
		}else {
			const match = await matchPassword(password,user.password);
			if(!match) {
				errors.push('Password incorrect');
			}
		}
	}
		
	
	console.log('validateRegisterInput errors',errors);

	return {
		errors,
		isValid:errors.length === 0
	};
		
};


module.exports = validateLoginInput;