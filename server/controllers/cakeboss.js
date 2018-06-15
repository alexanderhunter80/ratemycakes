const Cake = require('../models/mongoose.js');

module.exports = {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    destroy: destroy,
    addReview: addReview,
}

function getAll(req, res){
    Cake.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

function getOne(req, res){
    Cake.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

// create/update object:  {title: req.body.title, description: req.body.description, completed: req.body.completed}
// review object:  {stars:req.body.stars, comment:eq.body.comment}

function create(req, res){
    Cake.create({baker: req.body.baker, imagepath: req.body.imagepath, averagestars: req.body.averagestars, ratings: req.body.ratings})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

// probably unnecessary
function update(req, res){
    Cake.findByIdAndUpdate(req.params.id, {$set: {baker: req.body.baker, imagepath: req.body.imagepath, averagestars: req.body.averagestars, ratings: req.body.ratings}})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

function destroy(req, res){
    Cake.findByIdAndRemove(req.params.id) // deleted req.body?
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

function addReview(req,res){
    Cake.findByIdAndUpdate(req.params.id, {$push: {reviews:{stars:req.body.stars, comment:eq.body.comment}}})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
    this.updateAverage(req.params.id);
}

function updateAverage(id){
    // get all reviews for cake._id
    console.log('updating average for cake '+id);
    Cake.findById(id)
    .then((data)=>{
        // calculate average
        let sum = 0;
        for(i of data.reviews){
            sum += i;
        }
        let newAverage = sum / data.reviews.length;
        console.log('new average stars: '+newAverage);
        // query: update average
        Cake.findByIdAndUpdate(id, {$set: {averagestars:newAverage}})
        .then((data)=>console.log('average updated'))
        .catch((err)=>console.log('error updating average: '+err));

    })
    .catch((err)=>console.log('error finding cake: '+err));

};