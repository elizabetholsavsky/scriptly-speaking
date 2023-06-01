const router = require('express').Router();
const { User, Post, Comment, Update } = require('../../models');

// new post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            post_body: req.body.post_body,
            user_id: req.session.user_id || req.body.user_id
        });
        res.status(200).json(newPost);
        console.log('Post created!');
    } catch (err) {
        res.status(400).json(err);
    }
});

// get single post by ID
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk( req.params.id, {
            include: [{
                model: User,
                attributes: { exclude: ['password'] },
            },
            {
                model: Update,
                include: {
                    model: User,
                    attributes: ['username'],
                },
                order: [['created_at', 'ASC']]
            },
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['id', 'username'],
                },            
                order: [['created_at', 'DESC']]
            }],
        });

        // Adds verification of user to post
        const myBlog = req.session.user_id === postData.user.id;
        const post = postData.get({ plain: true });
        post['myBlog'] = myBlog;

        // Adds verification of user to comments
        const comments = postData.comments.map(comment => {
            const myComment = req.session.user_id === comment.user.id;
            const c = comment.get({ plain: true });
            c['myComment'] = myComment;
            return c;
        });

        res.render("single-post", {
            post,
            comments,
            loggedIn: req.session.logged_in,
            userId: req.session.user_id,
        });

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;