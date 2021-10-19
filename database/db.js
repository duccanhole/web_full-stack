const mongoose = require('mongoose');

//connect to mongodb
function connect(){
    mongoose.connect('mongodb://localhost:27017/database')
    .then(console.log('Connect to database !'))
}

module.exports={connect};