const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

});

module.exports = mongoose.model('Comment', commentSchema, 'comments');
