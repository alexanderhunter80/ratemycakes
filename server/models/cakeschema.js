const mongoose = require('mongoose');
var validate = require('mongoose-validator');

// validators

var bakerValidator = [
    validate({
        validator: 'isLength',
        arguments: [4, 100],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
      }),
      validate({
        validator: 'matches',
        arguments: /^[a-z\d\-_\s]+$/i,
        message: 'Name should contain only alphanumerics, spaces, and dashes',
      }),
];

var imagepathValidator = [
    validate({
        validator: 'matches',
        arguments: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm,
        message: 'Not a valid URL'
    })
]

// schema

const CakeSchema = mongoose.Schema({
    baker: {type: String, required: true, validate: bakerValidator},
    imagepath: {type: String, required: true, validate: imagepathValidator},
    averagestars: {type: Number},
    reviews: {type: Array}
}, {timestamps: true});

// const TaskSchema = mongoose.Schema({
//     title: {type: String},
//     description: {type: String},
//     completed: {type: Boolean},
// }, {timestamps: true});

module.exports = CakeSchema;