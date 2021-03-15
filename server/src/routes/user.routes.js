const express = require('express');
const router = express.Router();

router.route('/signin').post((req,res)=>{
console.log('user sign in');
res.send('user sign in')
});
router.route('/signup').post((req,res)=>{
console.log('user sign up');
res.send('user sign up')
});

module.exports = router;