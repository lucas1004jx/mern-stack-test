const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');


const userSchema = new Schema({
	userName: { type: 'String',required: true,},
	email: { type: 'String', required: true, unique:true },
	password: { type: 'String', required: true },
	dateAdded: { type: 'Date', default: Date.now, required: true },
});

userSchema.pre('save',async function (next)  {
	const hash = await bcrypt.hash(this.password,10);
	this.password = hash;
	next();
} ); 

module.exports = mongoose.model('User', userSchema);
