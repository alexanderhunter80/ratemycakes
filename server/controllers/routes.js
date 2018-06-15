const express = require('express'),
    router = express.Router();

const Cakeboss = require('./cakeboss.js');

router.get('/', function(req, res){
    console.log('resolving getAll');
    Cakeboss.getAll(req, res);
});  

router.get('/:id', function(req, res){
    console.log('resolving getOne');
    Cakeboss.getOne(req, res);
});

router.post('/', function(req, res){
    console.log('resolving create');
    Cakeboss.create(req, res);
});

router.put('/:id', function(req, res){
    console.log('resolving update');
    Cakeboss.addReview(req, res);
});

router.delete('/:id', function(req, res){
    console.log('resolving destroy');
    Cakeboss.destroy(req, res);
});

module.exports = router;