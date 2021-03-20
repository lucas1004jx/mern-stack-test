
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user'); 

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET
};

const strategy = new JwtStrategy(options,async (jwt_payload, done)=>{

	try {
		const {email} = jwt_payload;
		const user = await User.findOne({email:email});
		if(!user) return done(null,false,{message:'No user found'});
		return done(null,user);
	} catch (error) {
		console.log('strategy--->',error);
		done(error,null,{message:'authentication error'});
	}	
	
});


module.exports = passport => {
	passport.use(strategy);
};