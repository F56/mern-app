const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: false },
    content: { type: String, required: true },
    date: { type: Date },
    public: { type: Boolean, default: false }
});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;