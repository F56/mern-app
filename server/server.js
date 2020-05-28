const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connect
const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', async () => {
    console.log('MongoDB connection established successfully.')
});

// Routes
const userRouter = require('./routes/user.router');
const bookRouter = require('./routes/book.router');

app.use('/users', userRouter);
app.use('/books', bookRouter);

// Checking App Connection
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});