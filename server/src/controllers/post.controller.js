const Post = require('../models/post');
const cuid = require('cuid');
const slug = require('limax');
const sanitizeHtml = require('sanitize-html');

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
const getPosts = async (req, res) => {
	const user= req.user;
	Post.find({user:user.email}).sort('-dateAdded').exec((err, posts) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json({ posts });
	});
};

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
const addPost = async (req, res) => {

	if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
		res.status(403).end();
	}
	const user= req.user;
	const newPost = new Post(req.body.post);
	
	// Let's sanitize inputs
	newPost.user= user.email;
	newPost.title = sanitizeHtml(newPost.title);
	newPost.name = sanitizeHtml(newPost.name);
	newPost.content = sanitizeHtml(newPost.content);

	newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
	newPost.cuid = cuid();
	console.log('newPost--->,',newPost);
	newPost.save((err, saved) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json({ post: saved });
	});

};

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
const getPost = async (req, res) => {
	const user= req.user;
	Post.findOne({user:user.email, cuid: req.params.cuid }).exec((err, post) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json({ post });
	});
};

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
const deletePost = async (req, res) => {
	const user= req.user;
	Post.findOne({user:user.email, cuid: req.params.cuid }).exec((err, post) => {
		if (err) {
			res.status(500).send(err);
		}

		post.remove(() => {
			res.status(200).json({message:'Remove post successfully'});
		});
	});
};

module.exports = {
	getPosts,
	addPost,
	getPost,
	deletePost
};
