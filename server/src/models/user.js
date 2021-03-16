const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');

const userSchema = new Schema({
	email: { type: 'String', required: true },
	password: { type: 'String', required: true },
	dateAdded: { type: 'Date', default: Date.now, required: true },
});

userSchema.methods.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	const hash =bcrypt.hash(password,salt);
	return hash;
};

userSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password,this.password);
};

module.exports = mongoose.model('User', userSchema);
