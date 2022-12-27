const mongoose = require('mongoose');
const Schema = mongoose.Schema;

Post = new Schema({
    tittle: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date
    }
}, {
    collation: 'post'
});

module.exports = mongoose.model('Post',Post);