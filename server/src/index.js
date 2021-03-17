require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const apiPort = 3000;
const db = require('./db');
const posts = require('./routes/post.routes');
const users = require('./routes/user.routes');
const passport = require('passport');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);


app.use('/api',passport.authenticate('jwt',{session:false}), posts);
app.use('/user', users);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
