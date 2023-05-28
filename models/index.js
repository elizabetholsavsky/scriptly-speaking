const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Update = require('./Update');

User.hasMany( Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo( User, {
    foreignKey: 'user_id'
});

Post.hasMany( Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo( Post, {
    foreignKey: 'post_id'
});

User.hasMany( Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo( User, {
    foreignKey: 'user_id'
});

Post.hasMany( Update, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Update.belongsTo( Post, {
    foreignKey: 'post_id'
});

User.hasMany( Update, {
    foreignKey: 'user_id'
});

Update.belongsTo( User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment, Update };