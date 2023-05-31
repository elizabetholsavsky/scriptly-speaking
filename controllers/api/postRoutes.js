const router = require('express').Router();
const { User, Post, Comment, Update } = require('../../models');

router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                id: req.params.id,
            },
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
                    attributes: ['username'],
                }
            }],
            order: [['updated_at', 'DESC']]
        })
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;