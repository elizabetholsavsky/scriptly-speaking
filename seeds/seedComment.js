const { Comment } = require('../models');

const commentData = [
    {
        "comment_body": "In iaculis nunc sed augue lacus viverra vitae congue.",
        "post_id": 1,
        "user_id": 5,
    },
    {
        "comment_body": "Neque convallis a cras semper.",
        "post_id": 2,
        "user_id": 3,
    },
    {
        "comment_body": "Tristique senectus et netus et malesuada fames ac turpis.",
        "post_id": 3,
        "user_id": 4,
    },
    {
        "comment_body": "Ut ornare lectus sit amet est placerat in egestas.",
        "post_id": 4,
        "user_id": 2,
    },
    {
        "comment_body": "Iaculis nunc sed augue lacus. Varius duis at consectetur lorem donec.",
        "post_id": 5,
        "user_id": 1,
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;