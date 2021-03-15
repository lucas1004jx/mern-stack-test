

const userSignIn = (req,res) => {
console.log('user sign in', req.body.user)
res.send('user sign in')
}

const userSignUp = (req,res) => {
console.log('user sign up', req.body.user)
res.send('user sign up')
}

module.exports = {
userSignIn,
userSignUp
}