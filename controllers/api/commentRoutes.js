const router = require('express').Router();
const { User, Post, Comment, Update } = require('../../models');

// new comment
router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id || req.body.user_id
        });
        
        res.status(200).json(comment);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// delete comment
router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        }); 
        console.log(comment);
        if(!comment) {
        res.status(404).json({ message: 'No comment found with that id!' });
        return;
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;