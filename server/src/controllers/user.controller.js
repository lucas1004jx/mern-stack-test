

const getCurrentUser = (req,res) => {
	const {userName,email,dateAdded} = req.user;
	console.log('getCurrentUser',email);
	res.status(200).json({
		userName,
		email,
		dateAdded
	});
};

module.exports = {
	getCurrentUser
};