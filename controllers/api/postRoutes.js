const router = require('express').Router();
const { User, Post, Comment, Update } = require('../../models');

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

        console.log(comments);

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