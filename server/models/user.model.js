const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 4 },
    password: { type: String, required: true, minlength: 6  },
    email: { type: String, required: true, unique: true },
    privileges: { type: String, default: '1' }    
});


const User = mongoose.model('User', userSchema);

module.exports = User;