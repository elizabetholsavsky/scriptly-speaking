const router = require('express').Router();
const { Comment, Post, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;