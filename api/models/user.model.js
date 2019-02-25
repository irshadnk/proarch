const mongoose = require('mongoose');
const Schema = mongoose.Schema;
UserSchema = Schema({
    userName: { type: String },
    email: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    dob: { type: String },
    skills: { type: String },
    country: { type: String },
    createdOn: { type: Date, default: new Date() },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;