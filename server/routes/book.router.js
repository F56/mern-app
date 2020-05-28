const router = require('express').Router();
const bcrypt = require('bcryptjs');
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/mybooks').get(async (req, res) => {
    await Book.findOne({ author: req.body.author })
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description;
    const content = req.body.content;
    const date = Date.parse(req.body.date);

    const newBook = new Book({ author, title, description, content, date });
    newBook.save()
        .then(() => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/mybooks/update/:id').post(async (req, res) => {
    await Book.findById(req.params.id)
        .then(books => {
            books.author = req.body.author;
            books.title = req.body.title;
            books.description = req.body.description;
            books.date = Date.parse(req.body.date);

            books.save()
                .then(() => res.json('Book updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));       
});

router.route('/mybooks/delete/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => res.json('Book deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id')

module.exports = router;