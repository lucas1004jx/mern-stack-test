const bcrypt = require('bcryptjs');

const matchPassword = async (inComingPassword,passwordInDb) => {
	return await bcrypt.compare(inComingPassword,passwordInDb);
};

module.exports = matchPassword;