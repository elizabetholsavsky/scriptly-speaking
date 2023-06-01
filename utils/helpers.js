module.exports = {

format_date: (date) => {
    return date.toDateString()
},

num_of_comments: (comments) => {

    switch (comments.length) {
        case 0:
            return "Leave a comment...";
        case 1:
            return `${comments.length} comment`;
        default:
            return `${comments.length} comments`;
    }
}
};