const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var person = new Schema({
    name: {type: String},
    age: {type: Number},
    grade: {type: String}
})

module.exports = mongoose.model('mess',person);