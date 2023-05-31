const router = require('express').Router();
const { User, Post, Comment, Update } = require('../../models');

// Login 
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username }});

        if(!userData) {
            res.status(400).json({ message: "We're sorry, but the login information you provided is not valid. Please double-check your username and password and try again." });
            return;
        }

        const validatePassword = await userData.checkPassword(req.body.password);

        if(!validatePassword) {
            res.status(400).json({ message: "We're sorry, but the login information you provided is not valid. Please double-check your username and password and try again." });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.username = userData.username;
            res.json({ user: userData, message: "You're in, welcome!" })
        });

    } catch (err) {
        res.status(400).json(err);
    };
});

// Sign-up
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.username = userData.username;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;