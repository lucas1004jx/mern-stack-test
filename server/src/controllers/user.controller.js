

const getCurrentUser = (req,res) => {
	const {email,dateAdded} = req.user;
	console.log('getCurrentUser',email);
	res.status(200).json({
		email,
		dateAdded
	});
};

module.exports = {
	getCurrentUser
};