const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cakes', function(err){
    if(err){
        console.log('mongoose connection error ',err);
    } else {
        console.log('connection is up');
    }
});

const CakeSchema = require('./cakeschema.js');

module.exports = mongoose.model('Cake', CakeSchema);